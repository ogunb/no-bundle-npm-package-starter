<template>
  <div class="m-auto">
    <input
      :id="id"
      v-bind="$attrs"
      class="checkbox"
      type="checkbox"
      :checked="shouldBeChecked"
      :value="value"
      @change="updateInput"
    >
    <label :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaklavaCheckbox',

  model: {
    prop: 'modelValue',
    event: 'change',
  },

  props: {
    value: {
      type: null,
      default: false,
    },

    trackBy: {
      type: null,
      default: null,
    },

    modelValue: {
      type: null,
      default: false,
    },

    trueValue: {
      type: null,
      default: true,
    },

    falseValue: {
      type: null,
      default: false,
    },

    label: {
      type: [String, Number],
      default: '',
    },
  },

  computed: {
    id () {
      return `checkbox_${this._uid}`;
    },

    shouldBeChecked () {
      if (this.modelValue instanceof Array) {
        if (this.trackBy) {
          return this.modelValue.some(
            (el) => el[this.trackBy] == this.value[this.trackBy],
          );
        }

        return this.modelValue.includes(this.value);
      }

      return this.modelValue === this.trueValue;
    },
  },

  methods: {
    updateInput (event) {
      const isChecked = event.target.checked;

      if (this.modelValue instanceof Array) {
        const newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit('change', newValue);
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles';

.checkbox {
  position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  & + label::before {
    content: '';
    display: inline-block;
    vertical-align: text-top;
    width: 16px;
    height: 16px;
    background: get-color(white);
    border: 1px solid get-color(mid-grey, 800);
    border-radius: 3px;
    margin-right: 10px;
  }

  // Box focus
  &:focus + label::before {
    box-shadow: 0 0 0 3px rgba(get-color(dark-grey, 600), 0.12);
  }

  // Box checked
  &:checked + label::before {
    background: get-color(orange, 500);
    border-color: get-color(orange, 500);
  }

  // Disabled state label.
  &:disabled + label {
    color: get-color(dark-grey, 500);
    cursor: auto;
    border-color: get-color(dark-grey, 500);
  }

  // Disabled box.
  &:disabled + label:before {
    box-shadow: none;
    background: get-color(dark-grey, 500);
    border-color: get-color(dark-grey, 500);
  }

  // Checkmark. Could be replaced with an image
  &:checked + label::after {
    content: '';
    position: absolute;
    left: 4px;
    top: calc(50% - 2px);
    background: white;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
      4px -6px 0 white, 4px -8px 0 white;
    transform: rotate(45deg) scale(0.8);
  }
}
</style>
