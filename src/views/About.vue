<template>
  <v-div class="about">
    <a class="ml-7 tw-no-underline tw-font-mono" href="/">Home</a> > About
    <h1 class="tw-mt-5 tw-ml-8">About Us</h1>
    <v-container>
      <v-row>
        <v-col cols="12" lg="8" md="8" sm="12">
          <v-div class="justify-content mt-2"
            ><h3 class="mb-2">Our Story</h3>
            <a href="/" class="text--orange tw-no-underline">Peppernnuts.com</a>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quasi
            neque aspernatur, nesciunt id, perspiciatis quos vero, modi
            molestiae aliquid ea enim dignissimos quod fugiat minus! Inventore
            totam incidunt mollitia Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum, itaque quo esse vitae at tenetur
            quaerat et consectetur saepe blanditiis hic, incidunt ipsum illum
            perferendis nulla dolorem fugiat, maxime dignissimos.</v-div
          >
        </v-col>
        <v-col cols="12" lg="4" md="4" sm="12"
          ><v-img
            height="200px"
            class="ml-3 mt-2"
            src="https://imgr.search.brave.com/1qsSBA9W2NM_7_5Gil4XQ0xU-kKbaaRAIUz7t1tbduo/fit/751/225/ce/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/RkNXRWViMHFsdF84/UTd4VXQtZ1pBSGFF/ciZwaWQ9QXBp"
            contain
          ></v-img
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-div class="justify-content mt-2 tw-float-right"
            ><h3 class="mb-2">Our Goals</h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quasi
            neque aspernatur, nesciunt id, perspiciatis quos vero, modi
            molestiae aliquid ea enim dignissimos quod fugiat minus! Inventore
            totam incidunt mollitia Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum, itaque quo esse vitae at tenetur
            quaerat et consectetur saepe blanditiis hic, incidunt ipsum illum
            perferendis nulla dolorem fugiat, maxime dignissimos Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Ipsa aperiam
            consequuntur praesentium minus inventore assumenda totam aliquid,
            commodi labore laudantium odit, autem quas enim in officiis. Nisi
            eligendi explicabo eaque!</v-div
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12"
          ><v-img
            height="200px"
            class="ml-3 mt-4"
            src="https://imgr.search.brave.com/yl7qk67g6fRwGnUq-PWX-m5NxLpmLIeBjkK97cIBdv8/fit/1200/768/ce/1/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/L19mblVQTWFXZ1cx/Yy9UU0lEdFVIenZB/SS9BQUFBQUFBQUFG/cy84cGhBN29ZQU9o/Yy9zMTYwMC9zcXVp/cnJlbCtlYXRpbmcr/bnV0cythbmltYWxz/K3dhbGxwYXBlcnMu/anBn"
            contain
          ></v-img
        ></v-col>
        <v-col cols="12" lg="8" md="8" sm="12">
          <v-div class="justify-content mt-2"
            ><h3 class="mb-2">Our Passion</h3>

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quasi
            neque aspernatur, nesciunt id, perspiciatis quos vero, modi
            molestiae aliquid ea enim dignissimos quod fugiat minus! Inventore
            totam incidunt mollitia Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum, itaque quo esse vitae at tenetur
            quaerat et consectetur saepe blanditiis hic, incidunt ipsum illum
            perferendis nulla dolorem fugiat, maxime dignissimos.Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Sunt quasi neque
            aspernatur, nesciunt id, perspiciatis quos vero, modi molestiae
            aliquid ea enim dignissimos quod fugiat minus! Inventore totam
            incidunt mollitia Lorem ipsum dolor sit amet consectetur adipisicing
            elit.</v-div
          >
        </v-col>
      </v-row>
    </v-container>
    <Shipping />
  </v-div>
</template>

<script>
import Shipping from "../components/Shipping.vue";

export default {
  name: "about",
  components: {
    Shipping,
  },

  data: () => ({}),
};
</script>

<style scoped></style>
