import { action } from '@storybook/addon-actions';

import BaklavaRadio from './BaklavaRadio.vue';

export default {
  title: 'Baklava/BaklavaRadio',
  argTypes: {
    list: {
      control: {
        data: 'array',
        control: 'array',
      },
    },
    value: {},
  },
};

const Template = (args, { argTypes }) => ({
  components: { BaklavaRadio },
  props: Object.keys(argTypes),
  methods: {
    handleEvent: (eventName, ...args) => {
      action(eventName)(...args);
    },
  },
  template:
    '<BaklavaRadio v-bind="$props" @input="handleEvent(`input`, $event)" />',
});

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      value: 1,
      label: 'One',
    },
    {
      value: 2,
      label: 'Two',
    },
    {
      value: 3,
      label: 'Three',
    },
  ],
  value: 1,
};
