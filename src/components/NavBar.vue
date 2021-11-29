<template>
  <v-div>
    <v-row>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none mt-5 ml-3"
      ></v-app-bar-nav-icon>

      <v-col cols="10" lg="3" md="4" sm="4">
        <router-link to="/" tag="v-img"
          ><v-img
            class="ml-3 mt-2"
            src="../assets/logoooo.jpg"
            contain
          ></v-img> </router-link
      ></v-col>

      <!-- <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in items" :key="item.link">
            <v-icon>{{ item.icon }} </v-icon>{{ item.name }}
          </v-tab>
        </v-tabs> -->
      <v-col cols="10" lg="5" md="8">
        <v-list
          dense
          class="
            d-none d-sm-flex
            mt-3
            justify-center
            tw-font-serif tw-font-bold
          "
        >
          <v-list-item-group class="list font-bold">
            <v-list-item
              v-for="item in items"
              :key="item.name"
              router
              :to="item.link"
            >
              <v-list-item-title @click="tab = index">
                <v-icon>{{ item.icon }} </v-icon
                >{{ item.name }}</v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col cols="11" lg="4" md="12" sm="12">
        <v-row
          ><v-col cols="8" lg="7" md="9" sm="9"
            ><v-text-field
              @focus="searchClosed = false"
              @blur="searchClosed = true"
              placeholder="Search"
              filled
              dense
              class="expanding-search mt-4 ml-1"
              :class="{ closed: searchClosed }"
              append-icon="mdi-magnify"
              color="#FFB74D"
            ></v-text-field
          ></v-col>
          <v-col cols="3" lg="5" md="3" sm="3">
            <router-link to="/cart" tag="v-btn"
              ><v-btn outlined color="#50C3EC" class="tw-text-white-200 mt-5"
                ><v-badge left color="#50C3EC"
                  ><span slot="badge">0</span
                  ><v-icon>mdi-basket-outline</v-icon>
                </v-badge>
                $ 0.00</v-btn
              ></router-link
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Add a navigation bar -->
    <v-navigation-drawer v-model="drawer" absolute temporary color="#FFE0B2">
      <v-list nav dense class="mt-7">
        <v-list-item-group>
          <v-list-item
            v-for="item in items"
            :key="item.name"
            router
            :to="item.link"
            color="black"
          >
            <v-list-item-title @click="tab = index">
              <v-icon>{{ item.icon }} </v-icon>{{ item.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- Navigation bar ends -->
    <router-view />
  </v-div>
</template>

<script>
export default {
  data: function () {
    return {
      searchClosed: true,
      drawer: false,
      tab: null,
      items: [
        { name: "Home", icon: "mdi-home", link: "/" },
        { name: "Products", icon: "mdi-nut", link: "products" },
        { name: "categories", icon: "mdi-cart", link: "/categories" },
        { name: "About Us", icon: "mdi-forum", link: "/about" },
        { name: "Contact", icon: "mdi-contacts", link: "/contact" },
      ],
    };
  },
};
</script>

<style scoped>
/* .expanding-search {
  transition: max-width 0.7 !important;
  border: none !important;
} */

/* .closed {
  max-width: 45px;
} */

.list {
  display: flex;
  flex-direction: row;
}
</style>
