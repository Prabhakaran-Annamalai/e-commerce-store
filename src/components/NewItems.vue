<template>
  <v-card
    class="mx-auto best-sellers mr-1 mb-2 tw-opacity-90"
    max-width="344"
    :class="{ 'on-hover': hover }"
    ><v-hover>
      <v-img slot-scope="{ hover }" :src="driedFruit.src" height="150px">
        <v-expand-transition
          ><div v-if="hover" class="tw-h-40 d-flex transition-fast-in-fast-out">
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
</template>
