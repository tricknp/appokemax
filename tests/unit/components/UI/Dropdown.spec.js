import { mount } from '@vue/test-utils';
import Dropdown from '@/components/UI/Dropdown.vue';

function mountComponent(propsData) {
    return mount(Dropdown, { propsData });
}

describe('Dropdown.vue', () => {
    it('should render a default dropdown component', async () => {
        const wrapper = await mountComponent();
        expect(wrapper.element.className).toBe('dropdown');
    });

    it('should render a input', async () => {
        const wrapper = await mountComponent();
        const input = wrapper.findComponent('.dropdown__input');

        expect(input.exists()).toBe(true);
    });

    it('should render a correct label', async () => {
        const label = 'some value';
        const wrapper = await mountComponent({ label });
        const input = wrapper.findComponent('.dropdown__input');

        expect(input.element.getAttribute('placeholder')).toEqual(label);
    });

    it('should toggle dropdown when click in input', async () => {
        const label = 'some value';
        const wrapper = await mountComponent({ label });
        const input = wrapper.findComponent('.dropdown__input');

        expect(wrapper.vm.open).toBe(false);

        input.trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.open).toBe(true);
    });

    it('should select an item', async () => {
        const content = [
            { name: 'a' },
            { name: 'b' },
        ];
        const wrapper = await mountComponent({ content });
        const input = wrapper.findComponent('.dropdown__input');

        expect(wrapper.vm.selected).toBeFalsy();

        input.trigger('click');
        await wrapper.vm.$nextTick();

        const firstItem = wrapper.findAll('.dropdown__content__item').at(0);
        const secondItem = wrapper.findAll('.dropdown__content__item').at(1);

        firstItem.trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.selected).toEqual(content[0].name);

        secondItem.trigger('click');
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.selected).toEqual(content[1].name);
    });

    it('should render a readonly input', async () => {
        const wrapper = await mountComponent();
        const input = wrapper.findComponent('.dropdown__input');

        expect(input.element.getAttribute('readonly')).toBeTruthy();
    });

    it('should render a non readonly input when called prop digitable', async () => {
        const wrapper = await mountComponent({ digitable: true });
        const input = wrapper.findComponent('.dropdown__input');

        expect(input.element.getAttribute('readonly')).toBeFalsy();
    });
});