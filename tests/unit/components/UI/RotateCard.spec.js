import { mount } from '@vue/test-utils';
import RotateCard from '@/components/UI/RotateCard.vue';

function mountComponent(propsData) {
    return mount(RotateCard, { propsData });
}

describe('RotateCard.vue', () => {
    it('should render a default RotateCard component', async () => {
        const wrapper = await mountComponent();
        const card = wrapper.findComponent('.card');
        const button = wrapper.findComponent({ ref: 'card-button' });

        expect(card.exists()).toBe(true);
        expect(button.exists()).toBe(true);
    });

    it('should render frontside and backside from RotateCard', async () => {
        const wrapper = await mountComponent();
        const frontside = wrapper.findComponent({ ref: 'frontside' });
        const backside = wrapper.findComponent({ ref: 'backside' });

        expect(frontside.exists()).toBe(true);
        expect(backside.exists()).toBe(true);
    });

    it('should render frontside and backside default classes', async () => {
        const wrapper = await mountComponent();
        const frontside = wrapper.findComponent({ ref: 'frontside' });
        const backside = wrapper.findComponent({ ref: 'backside' });

        expect(frontside.element.classList.contains('card__frontside')).toBe(true);
        expect(backside.element.classList.contains('card__backside')).toBe(true);
    });

    it('should render a correct text in button', async () => {
        const buttonText = 'some text';
        const wrapper = await mountComponent({ buttonText });
        const button = wrapper.findComponent({ ref: 'card-button' });

        expect(button.text()).toEqual(buttonText);
    });

    it('should spin card when button click', async () => {
        const wrapper = await mountComponent();
        const frontside = wrapper.findComponent({ ref: 'frontside' });
        const backside = wrapper.findComponent({ ref: 'backside' });
        const button = wrapper.findComponent({ ref: 'card-button' });

        expect(backside.element.classList.contains('card__backside--rotate-back')).toBe(true);

        button.trigger('click');
        await wrapper.vm.$nextTick();

        expect(frontside.element.classList.contains('card__frontside--rotate-front')).toBe(true);
        expect(backside.element.classList.contains('card__backside--rotate-back')).toBe(false);

        button.trigger('click');
        await wrapper.vm.$nextTick();

        expect(frontside.element.classList.contains('card__frontside--rotate-front')).toBe(false);
        expect(backside.element.classList.contains('card__backside--rotate-back')).toBe(true);
    });
});