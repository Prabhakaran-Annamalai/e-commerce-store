<template>
  <v-div>
    <v-container>
      <a class="tw-ml-9 tw-mt-8 tw-no-underline tw-font-mono" href="/">Home</a>
      > contact</v-container
    >
    <Map />
    <Shipping />
  </v-div>
</template>

<script>
import Map from "@/components/Map.vue";
import Shipping from "../components/Shipping.vue";

export default {
  name: "contact",
  components: {
    Map,
    Shipping,
  },
};
</script>

<style>
#contact {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
