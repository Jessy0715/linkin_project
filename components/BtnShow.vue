<template>
  <div class="px-4 py-6 d-flex justify-center">
    <v-btn color="blue darken-2">
      <span class="white--text text-uppercase">
        <slot name="txt">預設 name </slot>
      </span>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>