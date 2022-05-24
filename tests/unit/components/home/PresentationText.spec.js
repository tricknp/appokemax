import { shallowMount } from '@vue/test-utils';
import PresentationText from '@/components/home/PresentationText.vue';
import Text from '@/components/UI/Text.vue';
import Button from '@/components/UI/Button.vue';

function mountComponent(propsData) {
    return shallowMount(PresentationText, { propsData });
}

describe('PresentationText.vue', () => {
    it('should have a correct texts component', async () => {
        const wrapper = await mountComponent();

        const title = wrapper.findAllComponents(Text).at(0);
        expect(title.props().variant).toEqual('title');

        const paragraph = wrapper.findAllComponents(Text).at(1);
        expect(paragraph.props().variant).toEqual('default');
    });

    it('should have a correct texts in button', async () => {
        const wrapper = await mountComponent();
        const button = wrapper.findComponent(Button);

        expect(button.text()).toEqual('Conheça todas gerações');
    });

    it('should have a correct link in generationsUrl data property', async () => {
        const url = 'https://pokemon.fandom.com/pt-br/wiki/Pok%C3%A9mon_Gera%C3%A7%C3%B5es';
        const wrapper = await mountComponent();

        expect(wrapper.vm.generationsUrl).toEqual(url);
    });
});