<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      width="100%"
      class="orange lighten-4 dark--text text-center"
    >
      <v-card-text>
        <v-btn
          :color="icons.color"
          v-for="icons in footerIcons"
          :key="icons"
          class="mx-4"
          icon
          :to="icons.link"
          target="_blank"
          ><v-icon>
            {{ icons.name }}
          </v-icon></v-btn
        >
      </v-card-text>
      <v-card-text class="pt-0 text-left text-md-center card-border">
        <v-expansion-panels accordion v-model="panel" multiple>
          <v-expansion-panel
            v-for="(item, i) in items"
            :key="i"
            class="orange lighten-4 col-md-3 col-12 elevation-0 footer-color"
          >
            <h3 class="d-none d-md-block py-2">{{ item.name }}</h3>
            <v-expansion-panel-header class="d-md-none">{{
              item.name
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <li
                v-for="tag in item.tags"
                :key="tag.name"
                class="mb-2 tw-no-underline"
              >
                <a
                  class="
                    footer-color footer-color-weight footer-url
                    tw-no-underline
                  "
                  :class="{ 'on-hover': hover }"
                  >{{ tag.urlname }}
                </a>
              </li>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="footer-color footer-color-weight">
        Copyright 2020 - {{ new Date().getFullYear() }}
        <a
          class="footer-color footer-color-weight"
          href="https://peppernnuts.com"
          none
          >PeppernNuts</a
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    panel: [],

    footerIcons: [
      {
        name: "mdi-facebook",
        color: "blue",
        link: "https://www.facebook.com/",
      },
      {
        name: "mdi-whatsapp",
        color: "green",
        link: "https://web.whatsapp.com/",
      },
      {
        name: "mdi-instagram",
        color: "pink",
        link: "https://www.instagram.com/",
      },
    ],

    items: [
      {
        name: "Menu",
        tags: [
          { urlname: "Home", url: "/" },
          { urlname: "Products", url: "/products" },
          { urlname: "Cart", url: "/cart" },
          { urlname: "About-US", url: "/about" },
          { urlname: "Contact-US", url: "/contact" },
        ],
      },
      {
        name: "Categories",
        tags: [
          {
            urlname: "Nuts & Seeds",
          },
          {
            urlname: "Mixed Packs",
          },
          {
            urlname: "Dried Fruit",
          },
          {
            urlname: "Snacks & trail mixes",
          },
        ],
      },
      {
        name: "Others",
        tags: [
          {
            urlname: "Helps",
          },
          {
            urlname: "Return Policy",
          },
          {
            urlname: "Wholesale",
          },
          {
            urlname: "Recipes",
          },
        ],
      },
    ],
  }),

  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      if (window.innerWidth >= 960) {
        this.panel = [...Array(4).keys()].map((k, i) => i);
      } else {
        this.panel = [];
      }
    },
  },
};
</script>

<style scoped>
@media (min-width: 960px) {
  .v-expansion-panel:before {
    box-shadow: none !important;
  }
  .v-expansion-panel:not(:first-child)::after {
    border-top: none;
  }
}
.resize {
  text-align: center;
}
.resize {
  margin-top: 3rem;
  font-size: 1.25rem;
}
/*RESIZESCREEN ANIMATION*/
.right {
  animation: rightanime 1s linear infinite;
}

.left {
  animation: leftanime 1s linear infinite;
}

@keyframes rightanime {
  50% {
    transform: translateX(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(10px);
    opacity: 0;
  }
}

@keyframes leftanime {
  50% {
    transform: translateX(-10px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-10px);
    opacity: 0;
  }
}

.footer-color {
  color: black !important;
  font-weight: bolder;
}

.footer-color-weight {
  font-weight: 400;
}

.footer-url:hover {
  color: grey !important;
}

.footer-border {
  border: none !important;
}
</style>
