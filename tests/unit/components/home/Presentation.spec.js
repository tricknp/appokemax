import { mount } from '@vue/test-utils';
import Presentation from '@/components/home/Presentation.vue';
import PresentationText from '@/components/home/PresentationText.vue';
import MainContent from '@/components/home/MainContent.vue';

function mountComponent(propsData) {
    return mount(Presentation, { propsData });
}

describe('Presentation.vue', () => {
    it('should mount default presentation', async () => {
        const wrapper = await mountComponent();

        expect(wrapper.element.className).toEqual('presentation');

        const picture = wrapper.findComponent('.presentation__background');
        const presentationText = wrapper.findComponent(PresentationText);
        const mainContent = wrapper.findComponent(MainContent);

        expect(picture.exists()).toBe(true);
        expect(presentationText.exists()).toBe(true);
        expect(mainContent.exists()).toBe(true);
    });
});