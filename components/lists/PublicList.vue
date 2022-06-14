<template>
  <v-list three-line>
    <template v-for="(item, index) in list">
      <v-divider
        v-if="item.divider"
        :key="index"
        :inset="item.inset"
      ></v-divider>

      <v-list-item
        v-else
        :key="item.title"
        style="border-radius: 5px"
        :style="
          isFeedPage
            ? 'background: #e8f1f8; margin-bottom: 16px;'
            : isJobPage || isNetworkPage
            ? 'background: #fff; margin-bottom: 16px;'
            : 'background: transparent;'"
      >
        <v-list-item-avatar :style="isFeedPage|| isJobPage || isNetworkPage ? 'margin-top: auto; margin-bottom: auto' : ''">
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            class="font-weight-bold"
            :class="isFeedPage ? '' : 'mb-2'"
            >{{ item.title }}</v-list-item-title
          >
          <v-list-item-subtitle v-if="!isFeedPage" style="line-height: 1.8">
            <span class="mr-2">{{ item.workRange }}</span>
            <span class="grey--text text--lighten-1">{{
              item.workRangeNote
            }}</span>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <template v-if="!isJobPage && !isNetworkPage">
              <div :class="isFeedPage ? '' : 'mb-4'">
                <span class="mr-2">{{ item.workDate }}</span>
                <span class="blue--text font-weight-medium">
                  {{ item.workDuring }}
                </span>
              </div>
            </template>
            <template v-if="isNetworkPage">
              <span class="blue--text font-weight-thin">{{ item.connections }}</span>
            </template>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <span v-if="!isFeedPage" class="text-body-2 black--text">{{
              item.intro
            }}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content v-if="isNetworkPage">
          <div class="text-caption px-4" style="border-left: 2px solid #1976D2">
            Hey, I saw your works. I like it! Can we do something together? Or
            maybe you have project for UX at the moment?
          </div>
        </v-list-item-content>
        <v-list-item-action
          :style="isFeedPage|| isJobPage || isNetworkPage ? 'margin-top: auto; margin-bottom: auto' : ''"
        >
          <v-btn icon v-if="isFeedPage">
            <v-icon color="blue darken-2" size="28">mdi-cloud-download</v-icon>
          </v-btn>
          <v-btn
            v-if="isJobPage"
            color="blue darken-2 white--text"
            class="text-uppercase"
          >
            More
          </v-btn>
          <div class="d-flex" v-if="isNetworkPage">
            <v-btn color="primary" class="mr-3">
              <span class="white--text">Accept</span>
            </v-btn>
            <v-btn color="primary" disabled outlined>
              <span>Decline</span>
            </v-btn>
          </div>
        </v-list-item-action>
      </v-list-item>
    </template>
  </v-list>
</template>
<script>
export default {
  name: "PublicList",
  props: {
    list: {
      type: Array,
    },
    isFeedPage: {
      type: Boolean,
    },
    isJobPage: {
      type: Boolean,
    },
    isNetworkPage: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
</style>