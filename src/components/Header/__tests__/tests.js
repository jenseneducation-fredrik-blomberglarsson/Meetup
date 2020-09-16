import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '../../../store/index.js';
import Header from '@/components/Header/Header.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('The page is rendered', () => {
  test('Test so that everything renders properly', async () => {
    const wrapper = shallowMount(Header, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  })
})