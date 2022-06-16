<template>
  <v-list two-line :style="isSearchPage?'background: #fff':'background: transparent'">
    <template v-for="(item, idx) in list">
      <v-list-item
        :key="idx"
        style="border-radius: 5px; border: 1px solid #eee; margin-bottom: 16px"
        :style="isSearchPage? 'background: #e8f1f8':'background: #fff'"
      >
        <v-list-item-avatar v-if="!isSearchPage">
          <v-img :src="item.src"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-html="item.name"> </v-list-item-title>
          <v-list-item-subtitle v-if="!isGroupPage" class="mb-2">{{
            item.jobTitle
          }}</v-list-item-subtitle>
          <small class="text-right">{{ item.date }}</small>
        </v-list-item-content>
        <v-list-item-action v-if="isSearchPage">
          <v-btn icon @click="changeRing(item)">
            <v-icon color="blue darken-2" size="28"
              >{{ item.icon }}</v-icon
            >
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </template>
  </v-list>
</template>
<script>
export default {
  name: "SmList",
  props: {
    list: {
      type: Array,
    },
    isGroupPage: {
      type: Boolean,
    },
    isSearchPage: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  methods: {
    changeRing(item) {
      if (item.icon === 'mdi-bell-off') {
        item.icon = 'mdi-bell-outline'
      } else {
        item.icon = 'mdi-bell-off'
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>