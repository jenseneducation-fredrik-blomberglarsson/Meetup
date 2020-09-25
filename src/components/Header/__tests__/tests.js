import { shallowMount, mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import Header from '@/components/Header/Header.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('The page is rendered', () => {
  test('Test so that everything renders properly', async () => {
    const wrapper = shallowMount(Header, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  })
  test('testing if router-link for front-page exists in component Header', () => {
    const wrapper = mount(Header, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/');
  });
})