<template>
  <v-card>
    <div class="d-flex justify-space-between align-center px-4">
      <small>
        <span class="blue--text text--darken-2">Ted Bell</span>,<span
          class="blue--text text--darken-2"
        >
          Annette Nguyen</span
        >, and <span class="blue--text text--darken-2">Cody Hawkins</span>liked
        this
      </small>
      <v-btn icon>
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </div>
    <v-divider></v-divider>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://randomuser.me/api/portraits/med/women/3.jpg"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title> Theresa Steward</v-list-item-title>
          <v-list-item-subtitle>iOS developer</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div class="px-4">
      <p class="text-body-1">
        What did the Dursleys care if Harry lost his place on the House
        Quidditch team because he hadn’t practiced all summer? What was it to
        the Dursleys if Harry went back to school without any of his homework
        done? The Dursleys were what wizards called Muggles (not a drop of
        magical blood in their veins).
      </p>
      <div class="blue--text text--darken-2 font-weight-bold text-uppercase mb-4">Read more</div>
    </div>
    <v-divider></v-divider>
    <div class="d-flex align-center px-4">
      <div class="pa-4">
        <v-icon size="26" color="blue darken-2">mdi-arrow-top-right</v-icon>
        <span>42</span>
      </div>
       <v-divider vertical></v-divider>
      <div class="pa-4">
        <v-icon size="26" color="blue darken-2"> mdi-message-outline</v-icon>
        <span>8</span>
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
      msgData: {
        state: "",
        avatar: "",
        name: "",
        jobTitle: "",
        paragraph: "",
        facebookNum: 42,
        msgNum: 5,
      },
    };
  },
};
</script>
<style lang="scss" scoped></style>
