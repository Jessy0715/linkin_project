<template>
  <div class="pa-4">
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="font-weight-bold text-uppercase text-subtitle-1">
        your dashboard
      </div>
      <div class="font-weight-medium text-uppercase blue--text text--darken-2" style="border-bottom: .5px solid #1976D2; cursor: pointer">
        go to stats
      </div>
    </div>
    <v-divider class="mb-2"></v-divider>
    <v-list-item v-for="(item, idx) in list" :key="idx">
      <v-list-item-content class="py-2">
        <v-list-item-title>
          <span class="blue--text text--darken-2 display-2 font-weight-bold">{{ item.score }}</span>
        </v-list-item-title>
        <v-list-item-subtitle>
          <span class="black--text text-subtitle-1">{{ item.text }}</span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    list: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>