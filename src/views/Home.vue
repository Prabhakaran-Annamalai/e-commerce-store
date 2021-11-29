<template>
  <v-div>
    <v-container>
      <h2 class="contents">
        Best Sellers<a
          href="#"
          class="tw-font-thin ml-2 tw-no-underline subtitle-1"
          >view all &#8594;</a
        >
      </h2>

      <v-layout row wrap class="mt-2">
        <v-flex
          xs6
          sm6
          md3
          1g3
          v-for="bestSeller in bestSellers"
          :key="bestSeller.name"
        >
          <v-card
            class="mx-auto best-sellers mr-1 mb-2 tw-opacity-90"
            max-width="344"
            :class="{ 'on-hover': hover }"
            ><v-img :src="bestSeller.src" height="150px"> </v-img>
            <v-card-title> {{ bestSeller.name }} </v-card-title>
            <v-card-subtitle class="tw-text-gray-200">
              Price :
              <strike>&#8377;{{ bestSeller.price }}</strike> &#8377;
              {{ bestSeller.offer }}</v-card-subtitle
            >
            <v-card-actions>
              <v-btn color="orange lighten-2"> Details </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <h2 class="mt-9">
        New Items<a
          href="#"
          class="tw-font-thin ml-2 tw-no-underline subtitle-1"
          >view all &#8594;</a
        >
      </h2>
      <v-layout row wrap class="mt-2">
        <v-flex xs6 sm6 md3 1g3 v-for="newItem in newItems" :key="newItem.name">
          <v-card
            class="mx-auto best-sellers mr-1 mb-2 tw-opacity-90"
            max-width="344"
            :class="{ 'on-hover': hover }"
            ><v-hover>
              <v-img slot-scope="{ hover }" :src="newItem.src" height="150px">
                <v-expand-transition
                  ><div
                    v-if="hover"
                    class="tw-h-40 d-flex transition-fast-in-fast-out"
                  >
                    <v-card-actions>
                      <v-btn color="orange lighten-2 "> view &#8594; </v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions></div
                ></v-expand-transition>
              </v-img>
            </v-hover>

            <v-card-title> {{ newItem.name }} </v-card-title>
            <v-card-subtitle class="tw-text-gray-200">
              Price : &#8377;{{ newItem.price }}</v-card-subtitle
            >
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <Shipping />

    <v-container>
      <h2 class="mt-9">
        Dried Fruits<a
          href="#"
          class="tw-font-thin ml-2 tw-no-underline subtitle-1"
          >view all &#8594;</a
        >
      </h2>
      <!-- <v-layout row wrap class="mt-2">
        <v-flex
          xs6
          sm6
          md3
          1g3
          v-for="driedFruit in driedFruits"
          :key="driedFruit.name"
        >
          <v-card
            class="mx-auto best-sellers mr-1 mb-2 tw-opacity-90"
            max-width="344"
            :class="{ 'on-hover': hover }"
            ><v-hover>
              <v-img
                slot-scope="{ hover }"
                :src="driedFruit.src"
                height="150px"
              >
                <v-expand-transition
                  ><div
                    v-if="hover"
                   
                    class="tw-h-40 d-flex transition-fast-in-fast-out"
                  >
                    <v-card-actions>
                      <v-btn color="orange lighten-2"> View &#8594; </v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions></div
                ></v-expand-transition>
              </v-img>
            </v-hover>

            <v-card-title> {{ driedFruit.name }} </v-card-title>
            <v-card-subtitle class="tw-text-gray-200">
              Price : &#8377;{{ driedFruit.price }}</v-card-subtitle
            >
          </v-card>
        </v-flex>
      </v-layout> -->

      <v-row class="mt-2">
        <v-col
          cols="12"
          lg="3"
          md="3"
          sm="6"
          v-for="driedFruit in driedFruits"
          :key="driedFruit.name"
        >
          <v-card
            class="best-sellers tw-opacity-90"
            :class="{ 'on-hover': hover }"
            ><v-hover>
              <v-img
                slot-scope="{ hover }"
                :src="driedFruit.src"
                height="150px"
              >
                <v-expand-transition
                  ><div
                    v-if="hover"
                    class="tw-h-40 d-flex transition-fast-in-fast-out"
                  >
                    <v-card-actions>
                      <v-btn color="orange lighten-2"> View &#8594; </v-btn>
                      <v-spacer></v-spacer>
                    </v-card-actions></div
                ></v-expand-transition>
              </v-img>
            </v-hover>

            <v-card-title> {{ driedFruit.name }} </v-card-title>
            <v-card-subtitle class="tw-text-gray-200">
              Price : &#8377;{{ driedFruit.price }}</v-card-subtitle
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-div class="tw-mt-9"></v-div>
  </v-div>
</template>

<script>
import Shipping from "../components/Shipping.vue";

export default {
  name: "Home",
  components: { Shipping },
  data: () => ({
    bestSellers: [
      {
        id: 1,
        name: "Almond",
        src: "https://images.pexels.com/photos/4753649/pexels-photo-4753649.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 499,
        offer: "449  -/-",
      },
      {
        id: 2,
        name: "Cashew",
        src: "https://media.istockphoto.com/photos/cashew-nut-picture-id94368659?k=20&m=94368659&s=612x612&w=0&h=786ms0c8b6ueSMA4-rxLw-7QKXWCMB_XR1IgmtnNLrA=",
        price: 519,
        offer: "459  -/-",
      },

      {
        id: 3,
        name: "Pistachio",
        src: "https://images.pexels.com/photos/52521/pistachio-nuts-pistachios-crisps-52521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 599,
        offer: "549  -/-",
      },
      {
        id: 4,
        name: "Pepper",
        src: "https://imgr.search.brave.com/RHrXaARAJFPJL2PWGIy80r8w8_e9VHfVO5gaOxk8tQ4/fit/770/627/ce/1/aHR0cHM6Ly9pMC53/cC5jb20vc3BpY2Vi/YXNrZXQuaW4vd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDgv/YmxhY2stcGVwcGVy/LW5ldy5qcGc",
        price: 899,
        offer: "789  -/-",
      },
    ],

    newItems: [
      {
        id: 1,
        name: "Mix Fruit ",
        src: "https://cdn-anini.nitrocdn.com/YXYWQiDcFcdQfctewEkORZwdFNalbmHA/assets/static/optimized/rev-d0e0275/wp-content/uploads/2021/09/Mix-Fruit-California-Gift-Tray.jpg",
        price: 756,
      },
      {
        id: 2,
        name: "Hi-Energy Mix",
        src: "https://cdn-anini.nitrocdn.com/YXYWQiDcFcdQfctewEkORZwdFNalbmHA/assets/static/optimized/rev-d0e0275/wp-content/uploads/2021/09/Hi-Energy-Trail-Mix-Gift-Tray-1.jpg",
        price: 549,
      },
      {
        id: 3,
        name: "Cajun Mix",
        src: "https://cdn-anini.nitrocdn.com/YXYWQiDcFcdQfctewEkORZwdFNalbmHA/assets/static/optimized/rev-d0e0275/wp-content/uploads/2021/09/Crazy-Cajun-Trail-Mix-Gift-Tray.jpg",
        price: 644,
      },
      {
        id: 4,
        name: "Heart Mix",
        src: "https://3vgcmv38bcjwq0gxi289i75z-wpengine.netdna-ssl.com/wp-content/uploads/2021/09/Happy-Heart-Trail-Mix-Gift-Tray-500x334.jpg",
        price: 779,
      },
    ],

    driedFruits: [
      {
        id: 1,
        name: "Dried Grapes",
        src: "https://media.istockphoto.com/photos/heap-of-raisins-on-white-picture-id463142133?k=20&m=463142133&s=612x612&w=0&h=_7_sr_V6FUFxp2yBKPJ1cDqFzQh_O2rzSRE58MF4cEc=",
        price: 500,
      },
      {
        id: 2,
        name: "Dried Banana",
        src: "https://3vgcmv38bcjwq0gxi289i75z-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/Dried-Banana-Chips-Nutstop.jpg",
        price: 500,
      },
      {
        id: 3,
        name: "Dried Kiwi",
        src: "https://cdn-anini.nitrocdn.com/YXYWQiDcFcdQfctewEkORZwdFNalbmHA/assets/static/optimized/rev-d0e0275/wp-content/uploads/2015/07/Dried-Kiwi-Nutstop.jpg",
        price: 500,
      },
      {
        id: 4,
        name: "Coconut Slices",
        src: "https://cdn-anini.nitrocdn.com/YXYWQiDcFcdQfctewEkORZwdFNalbmHA/assets/static/optimized/rev-d0e0275/wp-content/uploads/2015/07/Coconut-Slices-1-300x200.jpg",
        price: 500,
      },
    ],
  }),
};
</script>

<style scoped>
.best-sellers:hover {
  opacity: 1;
}

@media only screen and (max-width: 600px) {
  .carousel-height {
    height: 300 !important;
  }
}
</style>
