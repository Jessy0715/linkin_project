<template>
  <v-navigation-drawer
    :value="rightDrawer"
    :right="right"
    width="370"
    temporary
    fixed
  >
    <div class="d-flex justify-space-between align-center pa-3">
      <div class="font-weight-bold">More from LinkedIn</div>
      <!-- <div
        class="
          d-flex
          flex-wrap flex-column
          align-center
          blue--text
          text--darken-2
        "
        style="cursor: pointer"
      >
        <v-icon color="blue darken-2" @click.stop="updateDraw">mdi-close</v-icon>
      </div> -->
    </div>
    <v-divider></v-divider>
    <section class="px-4">
      <v-list class="mt-2">
        <v-list-item
          style="background: #1976d2; border-radius: 5px"
          class="white--text"
        >
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> Learning with LinkedIn</v-list-item-title>
            <v-list-item-subtitle class="white--text font-weight-thin"
              >Courses, lectures, workshops
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <main
        v-for="(item, idx) in demandLists"
        :key="idx"
        class="d-flex justify-space-around align-center mb-4"
      >
        <div style="width: 46%" v-for="ele in item.child" :key="ele.title">
          <div
            class="d-flex py-2"
            style="border: 1px solid #eee; border-radius: 5px"
          >
            <v-icon color="primary" class="mr-2">{{ ele.icon }}</v-icon>
            <div class="text-uppercase font-weight-bold">{{ ele.title }}</div>
          </div>
        </div>
      </main>
    </section>
    <v-divider></v-divider>
    <section class="px-4">
      <div class="text-subtitle-1 mt-2 font-weight-bold">Business services</div>
      <v-list class="mt-2">
        <template v-for="(item, idx) in itemLits">
          <v-list-item :key="idx" style="border-radius: 5px">
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">
                {{ item.title }}</v-list-item-title
              >
              <v-list-item-subtitle class="text-body-2"
                >{{ item.subTitle }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </section>
    <v-divider></v-divider>
    <section class="px-4">
      <v-list class="mt-2">
        <v-list-item
          style="background: #c8b479; border-radius: 5px"
          class="white--text"
        >
          <v-list-item-content>
            <v-list-item-title> LinkedIn Premium</v-list-item-title>
            <v-list-item-subtitle class="white--text font-weight-thin"
              >Special features only for premium users
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </section>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "",
  props: {
    rightDrawer: {
      type: Boolean,
    },
  },
  data() {
    return {
      right: true,
      demandLists: [
        {
          child: [
            {
              icon: "mdi-apps",
              title: "Insights",
            },
            {
              icon: "mdi-apps",
              title: "advertise",
            },
          ],
        },
        {
          child: [
            {
              icon: "mdi-apps",
              title: "groups",
            },
            {
              icon: "mdi-apps",
              title: "proFinder",
            },
          ],
        },
        {
          child: [
            {
              icon: "mdi-apps",
              title: "Salary",
            },
            {
              icon: "mdi-apps",
              title: "slideShare",
            },
          ],
        },
      ],
      itemLits: [
        {
          title: "Talent Solutions",
          subTitle: "Find, attract and recruit talent",
        },
        {
          title: "Sales Solutions",
          subTitle: "Unlock sales opportunities",
        },
        {
          title: "Post a job",
          subTitle: "Get your job in front of quality candidates",
        },
        {
          title: "Marketing Solutions",
          subTitle: "Acquire customers and grow your buisness",
        },
        {
          title: "Learning Solutions",
          subTitle: "Develop talent across your organisation",
        },
      ],
    };
  },
  methods: {
    updateDraw() {
      this.$emit("check");
    },
  },
};
</script>
<style lang="scss" scoped></style>
