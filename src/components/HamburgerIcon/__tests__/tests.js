import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import HamburgerIcon from '@/components/HamburgerIcon/HamburgerIcon.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Hamburger button is pressed', () => {
  test('Test so that everything renders properly', async () => {
    const wrapper = shallowMount(HamburgerIcon, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  })
  test('The hamburger icon (button) should show when the page is rendered', async () => {
    const wrapper = shallowMount(HamburgerIcon, {
      store,
      localVue,
    });

    const hamburgerButton = wrapper.find('.burgerIconImg');
    expect(hamburgerButton.exists()).toBe(true);
  });

  test('The hamburger icon (button) should toggle HamburgerMenu component on click', async () => {
    const state = {
      burgerToggle: false
    };
    const actions = {
      changeThisBurgerToggle: jest.fn()
    };
    const getters = {
      getBurgerToggle() {
        return state => state.burgerToggle
      }
    };
    const store = new Vuex.Store({
      state,
      actions,
      getters
    });
    const wrapper = shallowMount(HamburgerIcon, {
      store,
      localVue
    });

    const hamburgerButton = wrapper.find('.burgerIconImg');
    await hamburgerButton.trigger('click');
    expect(actions.changeThisBurgerToggle).toHaveBeenCalled();
  })
})