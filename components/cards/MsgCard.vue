<template>
  <v-card>
    <div class="d-flex justify-space-between align-center px-4">
      <slot name="state">預設 state</slot>
      <v-btn icon>
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </div>
    <v-divider></v-divider>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <slot name="avatar"></slot>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title> 
            <slot name="name">預設 name </slot>
          </v-list-item-title>
          <v-list-item-subtitle>
            <slot name="jobTitle">預設 jobTitle </slot>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div class="px-4">
      <slot></slot>
    </div>
    <v-divider></v-divider>
    <div class="d-flex align-center px-4">
      <div class="pa-4">
        <v-icon size="26" color="blue darken-2">mdi-arrow-top-right</v-icon>
        <slot name="facebookNum">預設 facebookNum </slot>
      </div>
       <v-divider vertical></v-divider>
      <div class="pa-4">
        <v-icon size="26" color="blue darken-2"> mdi-message-outline</v-icon>
        <slot name="msgNum">預設 msgNum </slot>
      </div>
       <v-divider vertical></v-divider>
      <v-spacer></v-spacer>
      <div class="pa-4">
        <v-icon size="26" color="blue darken-2"> mdi-share-variant</v-icon>
        <span>share</span>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "",
  data() {
    return {

    };
  },
};
</script>
<style lang="scss" scoped></style>
