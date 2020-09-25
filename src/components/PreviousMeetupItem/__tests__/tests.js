import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import PreviousMeetupItem from '@/components/PreviousMeetupItem/PreviousMeetupItem.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('The page is rendered', () => {
  // Mock previousMeetupItem
  const previousMeetup = {
    id: '01',
    category: 'Film',
    title: 'Movie marathon',
    desc: 'Watch different movies online with film enthusiasts',
    date: 'This meetup has passed',
    location: 'Online',
    organizer: 'Stockholm Film',
  };

  test('Test so that everything renders properly', async () => {
    const wrapper = shallowMount(PreviousMeetupItem, {
      store,
      localVue,
      propsData: {
        previousMeetup
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Test to check that output is correct on previousMeetup', async () => {
    const wrapper = shallowMount(PreviousMeetupItem, {
      store,
      localVue,
      propsData: {
        previousMeetup
      }
    });

    const previousMeetupCategory = wrapper.find('.previousMeetupCategory');
    const previousMeetupTitle = wrapper.find('.previousMeetupTitle');
    const previousMeetupDesc = wrapper.find('.previousMeetupDesc');
    const previousMeetupDate = wrapper.find('.previousMeetupDate');
    const previousMeetupLocation = wrapper.find('.previousMeetupLocation');
    const previousMeetupOrganizer = wrapper.find('.previousMeetupOrganizer');

    expect(previousMeetupCategory.text()).toContain(previousMeetup.category);
    expect(previousMeetupTitle.text()).toContain(previousMeetup.title);
    expect(previousMeetupDesc.text()).toContain(previousMeetup.desc);
    expect(previousMeetupDate.text()).toContain(previousMeetup.date);
    expect(previousMeetupLocation.text()).toContain(previousMeetup.location);
    expect(previousMeetupOrganizer.text()).toContain(previousMeetup.organizer);
  });

  test('Check that reviewForm does not show when rendered', async () => {
    const wrapper = shallowMount(PreviousMeetupItem, {
      store,
      localVue,
      propsData: {
        previousMeetup
      }
    });
    const reviewForm = wrapper.find('.createReviewForm');
    let elementExists = reviewForm.exists();
    expect(elementExists).toBe(true); // Kollar om elementet existerar

    if (elementExists) {
      let reviewVisible = reviewForm.element.style.display == '!none'; // Kollar om elementet är synligt
      expect(reviewVisible).toBe(false);
    }
  })

  test('Check that toggleReview is called when the createReview button is clicked', async () => {
    const wrapper = shallowMount(PreviousMeetupItem, {
      store,
      localVue,
      propsData: {
        previousMeetup
      }
    });

    wrapper.vm.toggleReview = jest.fn();
    const button = wrapper.find('.createReviewBtn');
    await button.trigger('click');
    expect(wrapper.vm.toggleReview).toHaveBeenCalled();
  })

  test('Check that submitted is called when submit button is clicked', async () => {
    const wrapper = shallowMount(PreviousMeetupItem, {
      store,
      localVue,
      propsData: {
        previousMeetup
      }
    });

    wrapper.vm.submitted = jest.fn();
    const button = wrapper.find('.submitReview');
    await button.trigger('click');
    expect(wrapper.vm.submitted).toHaveBeenCalled();
  })
})
