import { mount } from '@vue/test-utils';
import MainContent from '@/components/home/MainContent.vue';
import CardResult from '@/components/home/CardResult.vue';
import Dropdown from '@/components/UI/Dropdown.vue';

function mountComponent(propsData) {
    return mount(MainContent, { propsData });
}

describe('MainContent.vue', () => {
    it('should mount main content', async () => {
        const wrapper = await mountComponent();

        expect(wrapper.findComponent(Dropdown).exists()).toBe(true);
        expect(wrapper.findComponent(CardResult).exists()).toBe(true);
    });
});