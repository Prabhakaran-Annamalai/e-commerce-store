<template>
  <v-card
    outlined
    shaped
    class="mt-9 tw-opacity-95 ml-2 mr-2"
    color="orange lighten-5"
  >
    <v-layout row wrap>
      <v-flex xs6 sm6 md3 1g3 v-for="lists in shipping" :key="lists.name">
        <v-row class="ml-5">
          <v-col class="mb-5 mt-5"
            ><h3>{{ lists.title }}</h3>
            <h6>{{ lists.subtitle }}</h6>
            <v-img
              :src="lists.img"
              height="30px"
              width="40px"
              class="mr-9"
            ></v-img
          ></v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: function () {
    return {
      shipping: [
        {
          title: "Free Shipping",
          subtitle: "On All Orders Over Rs.1000",
          img: "https://media.istockphoto.com/vectors/free-delivery-sign-free-shipping-service-icon-stock-vector-vector-id1206704220?k=20&m=1206704220&s=612x612&w=0&h=rMW4XvBfnN8S3ePhuGxoKbx-Ac5LIBDFHu1Rs2lVE9I=",
        },
        {
          title: "Easy Returns",
          subtitle: "if goods have problems",
          img: "https://thumbs.dreamstime.com/b/well-organized-fully-editable-box-delivery-easy-returns-return-icon-any-use-like-print-media-web-commercial-kind-153727453.jpg",
        },
        {
          title: "Secure Payment",
          subtitle: "100% secure Payment",
          img: "https://media.istockphoto.com/vectors/secure-credit-card-transaction-payment-protection-concepts-secure-vector-id1131375112?k=20&m=1131375112&s=612x612&w=0&h=VWscd_XjEMTkqdz5hG8XteQZaDPDXN6IsMsd12iLu9Q=",
        },

        {
          title: "Gift Services",
          subtitle: "We supports gift services",
          img: "https://winksofjoy.com/wp-content/uploads/2020/11/christmas-new-year-s-day-red-gift-box-white-background-illustration_164911-157.jpg",
        },
      ],
    };
  },
};
</script>
