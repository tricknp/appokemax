import { mount } from '@vue/test-utils';
import Loader from '@/components/UI/Loader.vue';

function mountComponent(propsData) {
    return mount(Loader, { propsData });
}

describe('Loader.vue', () => {
    it('should render a default Loader component', async () => {
        const wrapper = await mountComponent();

        expect(wrapper.element.classList.contains('loading')).toBe(true);
        expect(wrapper.element.classList.contains('loading--medium')).toBe(true);
    });

    it('should render a small loader', async () => {
        const wrapper = await mountComponent({ size: 'small' });

        expect(wrapper.element.classList.contains('loading--small')).toBe(true);
    });
});