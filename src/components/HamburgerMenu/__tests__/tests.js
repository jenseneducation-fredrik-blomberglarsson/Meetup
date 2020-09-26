import { shallowMount, mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('Menu is opened', () => {
  test('Test so that everything renders properly', async () => {
    const state = {
      burgerToggle: true
    };
    const getters = {
      getBurgerToggle: state => {
        return state.burgerToggle;
      }
    };
    const store = new Vuex.Store({
      getters,
      state
    });

    const wrapper = shallowMount(HamburgerMenu, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('Test that HamburgerMenu component is rendered when burgerToggle is true', () => {
    const state = {
      burgerToggle: true
    };
    const getters = {
      getBurgerToggle: state => {
        return state.burgerToggle;
      }
    };
    const store = new Vuex.Store({
      getters,
      state
    });
    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    expect(wrapper.find('.hamburgerMenu').exists()).toBe(true);
  });

  test('Test that HamburgerMenu component is not rendered when burgerToggle is false', () => {
    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    expect(wrapper.find('.hamburgerMenu').exists()).toBe(false);
  });

  test('Check that close button exists', async () => {
    const state = {
      burgerToggle: true
    };
    const getters = {
      getBurgerToggle: state => {
        return state.burgerToggle;
      }
    };
    const store = new Vuex.Store({
      getters,
      state
    });
    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    const closeBtn = wrapper.find('.closeBtn');
    expect(closeBtn.exists()).toBe(true);
  });

  test('Test that close button closes the menu', async () => {
    const state = {
      burgerToggle: true
    };
    const actions = {
      changeThisBurgerToggle: jest.fn()
    };
    const getters = {
      getBurgerToggle: state => {
        return state.burgerToggle;
      }
    };
    const store = new Vuex.Store({
      actions,
      getters,
      state
    });
    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    const closeBtn = wrapper.find('.closeBtn');
    await closeBtn.trigger('click');

    expect(actions.changeThisBurgerToggle).toHaveBeenCalled();
  });

  test('Test that router-links also closes menu', async () => {
    const state = {
      burgerToggle: true
    };
    const actions = {
      changeThisBurgerToggle: jest.fn()
    };
    const getters = {
      getBurgerToggle: state => {
        return state.burgerToggle;
      }
    };
    const store = new Vuex.Store({
      actions,
      getters,
      state
    });
    const wrapper = shallowMount(HamburgerMenu, {
      store,
      localVue
    });

    const routerLink = wrapper.find('.router-link');
    await routerLink.trigger('click');

    expect(actions.changeThisBurgerToggle).toHaveBeenCalled();
  })

  test('test if router-link for front-page exists in component HamburgerMenu', () => {
    const state = {
      toggleBurger: true
    };
    const getters = {
      getBurgerToggle: state => {
        return state.toggleBurger;
      }
    };
    const store = new Vuex.Store({
      getters,
      state
    });

    const wrapper = mount(HamburgerMenu, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/');
  });
})