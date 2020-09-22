import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import MeetupItem from '@/components/MeetupItem/MeetupItem.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('The page is rendered', () => {
  // Mock meetupItem
  const meetup = {
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
        meetup
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Test to check that output is correct on MeetupItem', async () => {
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        meetup
      }
    });

    const meetupCategory = wrapper.find('.meetupCategory');
    const meetupTitle = wrapper.find('.meetupTitle');
    const meetupDesc = wrapper.find('.meetupDesc');
    const meetupDate = wrapper.find('.meetupDate');
    const meetupLocation = wrapper.find('.meetupLocation');
    const meetupOrganizer = wrapper.find('.meetupOrganizer');

    expect(meetupCategory.text()).toContain(meetup.category);
    expect(meetupTitle.text()).toContain(meetup.title);
    expect(meetupDesc.text()).toContain(meetup.desc);
    expect(meetupDate.text()).toContain(meetup.date);
    expect(meetupLocation.text()).toContain(meetup.location);
    expect(meetupOrganizer.text()).toContain(meetup.organizer);
  });

  test('Check if joinMeetupBtn is displayed if meetupToggle in store is false', async () => {
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        meetup
      }
    });

    const button = wrapper.find('.joinMeetupBtn');

    expect(store.state.meetupToggle).toBe(false);
    expect(button.exists()).toBe(true);
  })

  test('Check so that joinMeetupBtn is not displayed if meetupToggle in store is true', async () => {
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        meetup
      }
    });
    store.state.meetupToggle = true;
    await wrapper.vm.$nextTick();
    const button = wrapper.find('.joinMeetupBtn');

    expect(store.state.meetupToggle).toBe(true);
    expect(button.exists()).toBe(false);
  })

  test('Check if removeMeetupBtn is displayed if meetupToggle in store is true', async () => {
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        meetup
      }
    });
    store.state.meetupToggle = true;

    const button = wrapper.find('.removeMeetupBtn');

    expect(store.state.meetupToggle).toBe(true);
    expect(button.exists()).toBe(true);
  })

  test('Check so that removeMeetupBtn is not displayed if meetupToggle in store is false', async () => {
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        meetup
      }
    });

    store.state.meetupToggle = false;
    await wrapper.vm.$nextTick();
    const button = wrapper.find('.removeMeetupBtn');

    expect(store.state.meetupToggle).toBe(false);
    expect(button.exists()).toBe(false);
  });

  test('Check that addMeetup from store is called on button click', async () => {

    const actions = {
      addThisMeetup: jest.fn()
    };
    const getters = {
      getMeetupToggle: state => {
        return state.meetupToggle;
      }
    };
    const store = new Vuex.Store({
      getters,
      actions
    });
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        meetup
      }
    });

    const button = wrapper.find('.addMeetup');
    await button.trigger('click');
    await localVue.nextTick();

    expect(actions.addThisMeetup).toHaveBeenCalled();
  });

  test('Check that removeMeetup from store is called on button click', async () => {
    const state = {
      meetupToggle: true
    }
    const actions = {
      removeThisMeetup: jest.fn()
    };
    const getters = {
      getMeetupToggle: state => {
        return state.meetupToggle;
      }
    };
    const store = new Vuex.Store({
      state,
      getters,
      actions
    });
    const wrapper = shallowMount(MeetupItem, {
      store,
      localVue,
      propsData: {
        meetup
      }
    });

    const button = wrapper.find('.removeMeetup');
    await button.trigger('click');
    await localVue.nextTick();

    expect(actions.removeThisMeetup).toHaveBeenCalled();
  })
}) 