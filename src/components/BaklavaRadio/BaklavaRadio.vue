<template>
  <div class="baklava-radio">
    <div
      v-for="item of list"
      :key="`${item.value}_${item.label}_${_uid}_key`"
      class="custom-control custom-radio custom-control-inline"
    >
      <input
        :id="`${item.value}_${item.label}_${_uid}_key`"
        v-model="input"
        class="custom-control-input"
        type="radio"
        :name="`${item.value}_${item.label}_${_uid}_key`"
        :value="item.value"
        @input="$emit('input', item.value)"
      >
      <label
        class="custom-control-label"
        :for="`${item.value}_${item.label}_${_uid}_key`"
      >
        {{ item.label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaklavaRadio',

  props: {
    list: {
      type: Array,
      required: true,
    },
    value: {
      type: null,
      default: null,
    },
  },

  data () {
    return {
      input: null,
    };
  },

  watch: {
    value: {
      immediate: true,
      handler (value) {
        this.input = value;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles';

input[type='radio'] {
  label {
    border-color: get-color(light-grey, 500);
    background: red;
  }

  &:checked + label::before {
    background-color: get-color(orange, 500);
    border-color: transparent;
  }

  &:checked + label::after {
    transform: scale(1.4);
  }
}
</style>
