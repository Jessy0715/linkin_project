<template>
  <v-card>
    <v-card-title class="text-uppercase">new post</v-card-title>
    <div class="px-4">
      <v-divider></v-divider>
    </div>
    <div class="d-flex align-center">
      <v-card-text class="text-body-2" style="color: #bdbdbd">
        <span style="letter-spacing: 0.15em"> What’s on your mind? </span>
      </v-card-text>
      <div class="d-flex">
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
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "",
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
    };
  },
};
</script>
<style lang="scss" scoped>
.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: transparent !important;
}
</style>