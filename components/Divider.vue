<template>
  <div class="separator my-8">
    <div
      class="separator__text text-uppercase font-weight-medium px-8"
      :style="
        $vuetify.breakpoint.lg
          ? 'left:38%'
          : 'left:auto; width: 100%; text-align:center'
      "
    >
      <slot name="txt">預設文字1</slot>
      <slot name="txt2">預設文字2</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Divider",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.separator {
  position: relative;
  display: block;
  height: 1px;
  width: 100%;
  border-top: 1px solid #eee;
  &__text {
    transform: translateY(-50%);
    position: absolute;
    background: #f8f9fb;
  }
}
</style>