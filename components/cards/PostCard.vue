<template>
  <v-card>
    <slot name="title">預設 title</slot>
    <div class="px-4">
      <v-divider></v-divider>
    </div>
    <div class="d-flex align-center">
      <slot name="text">預設 text</slot>
      <div class="d-flex">
        <template v-if="!isJobPage">
          <v-btn
            class="mr-4 pa-0"
            color="primary"
            v-for="(item, idx) in iconGroup"
            :key="idx"
            :disabled="item.isDisabled"
            min-width="25"
            max-height="25"
          >
            <v-icon size="20"> {{ item.name }} </v-icon>
          </v-btn>
        </template>
        <template v-if="isJobPage">
          <v-btn
            class="mr-4 pa-0"
            color="primary"
            v-for="(item, idx) in jobIconGroup"
            :key="idx"
            :disabled="item.isDisabled"
            min-width="25"
            max-height="25"
          >
            <v-icon size="20"> {{ item.name }} </v-icon>
          </v-btn>
        </template>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "PostCard",
  props: {
    isJobPage: {
      type: Boolean,
    },
  },
  data() {
    return {
      iconGroup: [
        {
          name: "mdi-clock",
          isDisabled: true,
        },
        {
          name: "mdi-account",
          isDisabled: false,
        },
        {
          name: "mdi-flag",
          isDisabled: true,
        },
        {
          name: "mdi-application",
          isDisabled: true,
        },
      ],
      jobIconGroup: [
        {
          name: "mdi-flag",
          isDisabled: true,
        },
        {
          name: "mdi-application",
          isDisabled: true,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: transparent !important;
}
</style>