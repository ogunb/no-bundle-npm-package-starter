import { action } from '@storybook/addon-actions';
import BaklavaCheckbox from './BaklavaCheckbox.vue';

export default {
  title: 'Baklava/BaklavaCheckbox',
  argTypes: {},
};

const DefaultTemplate = (args, { argTypes }) => ({
  components: { BaklavaCheckbox },
  props: Object.keys(argTypes),
  methods: {
    handleEvent: (eventName, ...args) => {
      action(eventName)(...args);
    },
  },
  template:
    '<BaklavaCheckbox v-bind="$props" @change="handleEvent(\'change\', $event)" />',
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  modelValue: false,
  trueValue: true,
  falseValue: false,
  label: 'Label',
};

const ListTemplate = (args, { argTypes } = {}) => ({
  components: { BaklavaCheckbox },
  props: Object.keys(argTypes),
  methods: {
    handleEvent: (eventName, newValue) => {
      action(eventName)(newValue);
    },
  },
  data () {
    return {
      modelValue: [1],
    };
  },
  template: `
    <div>
      <BaklavaCheckbox v-bind="$props" :value="1" v-model="modelValue" label="1" @change="handleEvent('change', $event)"/>
      <BaklavaCheckbox v-bind="$props" :value="2" v-model="modelValue" label="2" @change="handleEvent('change', $event)"/>
    </div>
  `,
});

export const List = ListTemplate.bind({});
