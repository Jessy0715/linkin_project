<template>
  <v-card>
    <v-img
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <div class="d-flex justify-center">
      <v-avatar size="100" style="margin-top: -10%; border: 4px solid #fff">
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          width="120"
          alt="John"
        />
      </v-avatar>
    </div>
    <v-card-text>
      <div class="d-flex flex-column justify-space-between align-center">
        <div class="text-subtitle-1 font-weight-bold">
          <div class="d-flex align-center">
            <div class="mr-1">Dmitry Kargaev</div>
            <v-icon small color="#d1ad68">mdi-linkedin </v-icon>
          </div>
        </div>
        <div class="text-center px-2">
          <small>Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects.</small>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "AvatarCard",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>