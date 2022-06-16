<template>
  <v-card class="mx-auto">
    <v-list flat>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in list" :key="i" @click="check(item)">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span class="text-uppercase">{{ item.text }}</span>
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-content v-if="!isNote">
            <div class="num text-right font-weight-bold pr-2">
              {{ item.num }}
              <span class="circle" v-show="item.circle"></span>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "SideList",
  props: {
    list: {
      type: Array,
    },
    isNote: {
      type: Boolean
    }
  },
  data() {
    return {
      selectedItem: 1,
    };
  },
  methods: {
    check(item) {
      this.list.forEach((ele) => {
        if (item.text === ele.text) {
          ele.circle = true;
        } else {
          ele.circle = false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.circle {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 10px 0 0;
  background-color: #ffb74d;
  transform: translateY(-25%);
}
.v-list-item-group .v-list-item--active {
  border-left: 8px solid #1976d2;
}
.v-list .v-list-item--active .v-icon {
  color: #bdbdbd;
}
.v-list-item-group .v-list-item--active {
  color: #bdbdbd;
}
.v-list-item-group .v-list-item--active .num {
  color: #ffb74d;
}
</style>