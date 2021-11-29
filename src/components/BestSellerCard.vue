<template>
  <v-div
    ><v-card
      class="mx-auto best-sellers mr-1 mb-2 tw-opacity-90"
      max-width="344"
      :class="{ 'on-hover': hover }"
      ><v-img :src="product.src" height="150px"> </v-img>
      <v-card-title> {{ product.name }} </v-card-title>
      <v-card-subtitle class="tw-text-gray-200">
        Price :
        <strike>&#8377;{{ product.price }}</strike> &#8377;
        {{ product.offer }}</v-card-subtitle
      >
      <v-card-actions>
        <v-btn color="orange lighten-2"> Details </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions> </v-card
  ></v-div>
</template>

<script>
export default {
  name: "BestSellerCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
