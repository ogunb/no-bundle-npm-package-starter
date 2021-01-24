<template>
  <div>
    {{ componentName }}
  </div>
</template>

<script>
export default {
  name: '{{component}}',

  data () {
    return {
      componentName: '{{component}}',
    };
  },
};
</script>

<style lang="scss" scoped></style>
