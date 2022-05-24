import { mount } from '@vue/test-utils';
import Text from '@/components/UI/Text.vue';

function mountComponent(propsData) {
    return mount(Text, { propsData });
}

describe('Text.vue', () => {
    it('should render a default Text component', async () => {
        const wrapper = await mountComponent();

        expect(wrapper.element.classList.contains('text')).toBe(true);
        expect(wrapper.element.classList.contains('text--default')).toBe(true);
    });

    it('should render a correct variant', async () => {
        const wrapper = await mountComponent({ variant: 'title' });

        expect(wrapper.element.classList.contains('text--title')).toBe(true);

        wrapper.setProps({ variant: 'subtitle' });
        await wrapper.vm.$nextTick();

        expect(wrapper.element.classList.contains('text--subtitle')).toBe(true);
    });

    it('should render a correct type', async () => {
        const wrapper = await mountComponent({ type: 'italic' });

        expect(wrapper.element.classList.contains('text--italic')).toBe(true);

        wrapper.setProps({ type: 'bold' });
        await wrapper.vm.$nextTick();

        expect(wrapper.element.classList.contains('text--bold')).toBe(true);
    });

    it('should render h1 element when called variant title', async () => {
        const wrapper = await mountComponent({ variant: 'title' });

        expect(wrapper.element.tagName).toEqual('H1');
    });

    it('should render h2 element when called variant subtitle', async () => {
        const wrapper = await mountComponent({ variant: 'subtitle' });

        expect(wrapper.element.tagName).toEqual('H2');
    });

    it('should render p element when called variant default', async () => {
        const wrapper = await mountComponent({ variant: 'default' });

        expect(wrapper.element.tagName).toEqual('P');
    });

    it('should render a p when any variant is passed', async () => {
        const wrapper = await mountComponent();

        expect(wrapper.element.tagName).toEqual('P');
    });
});