import {{component}} from './{{component}}.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Baklava/{{component}}',
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { {{component}} },
  props: Object.keys(argTypes),
  methods: {
    handleEvent: (eventName, ...args) => {
      action(eventName)(...args);
    },
  },
  template: '<{{component}} v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
