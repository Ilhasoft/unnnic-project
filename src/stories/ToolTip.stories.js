import unnnicToolTip from '../components/ToolTip/ToolTip.vue';

export default {
  title: 'Example/ToolTip',
  component: unnnicToolTip,
  argTypes: {
    text: { control: { type: 'text' } },
    side: { control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { unnnicToolTip },
  template: '<unnnic-tool-tip v-bind="$props"> Hover over text </unnnic-tool-tip>',
});

export const Normal = Template.bind({});
Normal.args = {
  text: 'Label',
};
