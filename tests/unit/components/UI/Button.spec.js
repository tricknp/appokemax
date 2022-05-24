import { mount } from '@vue/test-utils';
import Button from '@/components/UI/Button.vue';

function mountComponent(propsData) {
    return mount(Button, { propsData });
}

describe('Button.vue', () => {
    it('should render a default button component', async () => {
        const wrapper = mountComponent();
        expect(wrapper.element.getAttribute('type')).toBe('button');
        expect(wrapper.element.classList.contains('appmax-button')).toBe(true);
        expect(wrapper.element.classList.contains('appmax-button--theme-primary')).toBe(true);
        expect(wrapper.element.classList.contains('appmax-button--size-medium')).toBe(true);
        expect(wrapper.element.classList.contains('appmax-button--square')).toBe(true);
    });

    it('should render a button component with a correct theme', async () => {
        const wrapper = await mountComponent({ theme: 'primary' });
        expect(wrapper.element.classList.contains('appmax-button--theme-secondary')).toBe(false);
        expect(wrapper.element.classList.contains('appmax-button--theme-primary')).toBe(true);

        wrapper.setProps({ theme: 'secondary' })
        await wrapper.vm.$nextTick();

        expect(wrapper.element.classList.contains('appmax-button--theme-primary')).toBe(false);
        expect(wrapper.element.classList.contains('appmax-button--theme-secondary')).toBe(true);
    });

    it('should render a button component with a correct type', async () => {
        const wrapper = await mountComponent({ type: 'submit' });
        expect(wrapper.element.getAttribute('type')).toBe('submit');
        
        wrapper.setProps({ type: 'reset' })
        await wrapper.vm.$nextTick();
        
        expect(wrapper.element.getAttribute('type')).toBe('reset');
    });

    it('should render a button component with a correct size', async () => {
        const wrapper = await mountComponent({ size: 'small' });
        expect(wrapper.element.classList.contains('appmax-button--size-small')).toBe(true);
        
        wrapper.setProps({ size: 'medium' })
        await wrapper.vm.$nextTick();
        
        expect(wrapper.element.classList.contains('appmax-button--size-small')).toBe(false);
        expect(wrapper.element.classList.contains('appmax-button--size-medium')).toBe(true);
      });

      it('should render a disabled button if disabled prop has been given as true', async () => {
        const wrapper = await mountComponent({ disabled: true });
        expect(wrapper.element.getAttribute('disabled')).toBeTruthy();
      });

      it('should not render a disabled button if disabled prop has not been given', async () => {
        const wrapper = await mountComponent();
        expect(wrapper.element.getAttribute('disabled')).toBeFalsy();
      });
});
