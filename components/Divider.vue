<template>
  <div class="separator my-8">
    <div class="separator__text text-uppercase font-weight-medium px-8">
      Sort by:
      <span class="blue--text text--darken-2"> trending</span>
    </div>
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
.separator {
  position: relative;
  display: block;
  height: 1px;
  width: 100%;
  border-top: 1px solid #eee;
  &__text {
    left: 38%;
    transform: translateY(-50%);
    position: absolute;
    background-color: #fff;
  }
}
</style>