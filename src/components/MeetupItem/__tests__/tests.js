import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import MeetupItem from '@/components/MeetupItem/MeetupItem.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('The page is rendered', () => {
  // Mock meetupItem
  const item = {
    id: '1',
    category: 'Tech',
    title: 'Learn front-end from scratch',
    desc: 'Learn front-end development with experienced developers',
    date: 'WED, SEP 23 6:30 PM',
    location: 'Online',
    organizer: 'Stockholm WebNow'
  };

  test('Test so that everything renders properly', async () => {
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        item
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Test to check that output is correct on MeetupItem', async () => {
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        item
      }
    });

    const meetupCategory = wrapper.find('.meetupCategory');
    const meetupTitle = wrapper.find('.meetupTitle');
    const meetupDesc = wrapper.find('.meetupDesc');
    const meetupDate = wrapper.find('.meetupDate');
    const meetupLocation = wrapper.find('.meetupLocation');
    const meetupOrganizer = wrapper.find('.meetupOrganizer');

    expect(meetupCategory.text()).toContain(item.category);
    expect(meetupTitle.text()).toContain(item.title);
    expect(meetupDesc.text()).toContain(item.desc);
    expect(meetupDate.text()).toContain(item.date);
    expect(meetupLocation.text()).toContain(item.location);
    expect(meetupOrganizer.text()).toContain(item.organizer);
  });

  test('Check if joinMeetup is displayed if joinMeetupToggle is false', async () => {
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        item
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
        item
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
        item
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
        item
      }
    });

    const button = wrapper.find('.joinMeetupBtn');
    await button.trigger('click');
    await localVue.nextTick();
    expect(actions.leaveMeetup).toHaveBeenCalled();
  })
})