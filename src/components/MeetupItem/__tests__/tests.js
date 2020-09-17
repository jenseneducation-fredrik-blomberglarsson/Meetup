import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import MeetupItem from '@/components/MeetupItem/MeetupItem.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('The page is rendered', () => {
  // Need to mock MeetupItem here when i've figured out its data
  const mockedMeetupItem = {
    id: '01',
    title: 'Tech Meetup',
    desc: 'Learn front-end development with experienced developers',
    date: 'WED, SEP 23 6:30 PM',
    location: 'Stockholmsmässan',
    organizer: 'Stockholm WebNow'
  };

  test('Test so that everything renders properly', async () => {
    const wrapper = shallowMount(MeetupItem, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Test to check that output is correct on MeetupItem', async () => {
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        mockedMeetupItem
      }
    });

    const meetupTitle = wrapper.find('.meetupTitle');
    const meetupDesc = wrapper.find('.meetupDesc');
    const meetupDate = wrapper.find('.meetupDate');
    const meetupLocation = wrapper.find('.meetupLocation');
    const meetupOrganizer = wrapper.find('.meetupOrganizer');

    expect(meetupTitle.text()).toContain(mockedMeetupItem.title);
    expect(meetupDesc.text()).toContain(mockedMeetupItem.desc);
    expect(meetupDate.text()).toContain(mockedMeetupItem.date);
    expect(meetupLocation.text()).toContain(mockedMeetupItem.location);
    expect(meetupOrganizer.text()).toContain(mockedMeetupItem.organizer);
  });

  test('Check if joinMeetup is displayed if joinMeetupToggle is false', async () => {
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        mockedMeetupItem
      }
    });

    const button = wrapper.find('.joinMeetupBtn');

    expect(store.state.joinMeetupToggle).toBe(false);
    expect(button.exists()).toBe(true);
  })

  test('Check if leaveMeetup is displayed if joinMeetupToggle is true', async () => {
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        mockedMeetupItem
      }
    });
    store.state.joinMeetupToggle = true;
    await wrapper.vm.$nextTick();
    const button = wrapper.find('.joinMeetupBtn');

    expect(store.state.joinMeetupToggle).toBe(true);
    expect(button.exists()).toBe(true);
  })

  test('Check that joinMeetup is called on button click', async () => {
    const state = {
      isMeetupToggleActive: false
    }

    const actions = {
      joinMeetup: jest.fn()
    };
    const getters = {
      getMeetupToggle: state => {
        return state.isMeetupToggleActive;
      }
    };
    const store = new Vuex.Store({
      actions,
      getters,
      state
    });

    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        mockedMeetupItem
      }
    });

    const button = wrapper.find('.joinMeetupBtn');
    await button.trigger('click');
    await localVue.nextTick();
    expect(actions.joinMeetup).toHaveBeenCalled();
  })

  test('Check that leaveMeetup is called on button click', async () => {
    const state = {
      isMeetupToggleActive: true
    }

    const actions = {
      leaveMeetup: jest.fn()
    };
    const getters = {
      getMeetupToggle: state => {
        return state.isMeetupToggleActive;
      }
    };
    const store = new Vuex.Store({
      actions,
      getters,
      state
    });

    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        mockedMeetupItem
      }
    });

    const button = wrapper.find('.joinMeetupBtn');
    await button.trigger('click');
    await localVue.nextTick();
    expect(actions.leaveMeetup).toHaveBeenCalled();
  })
})