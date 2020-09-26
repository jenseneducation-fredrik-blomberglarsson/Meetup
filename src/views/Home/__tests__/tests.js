import { shallowMount, mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import Home from '@/views/Home/Home.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('The page is rendered', () => {
  test('Test so that everything renders properly', async () => {
    const wrapper = shallowMount(Home, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  })

  test('test if router-link for meetups exists in Home view', () => {
    const wrapper = mount(Home, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/meetups');
  });
})