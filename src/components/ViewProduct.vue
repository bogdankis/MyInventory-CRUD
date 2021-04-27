<template>
  <div class="antialiased font-sans bg-gray-200 h-screen">
    <div class="container mx-auto px-0 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Products</h2>
        </div>
        <!--START SEARCH BAR-->
        <div class="my-2 flex sm:flex-row flex-col">
          <div class="bg-gray-200">
            <div>
              <div class="container">
                <div class="relative">
                  <div class="absolute top-4 left-3">
                    <i
                      class="fa fa-search text-gray-400 z-20 hover:text-gray-500"
                    ></i>
                  </div>
                  <input
                    v-model="search"
                    type="text"
                    class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                    placeholder="Search anything..."
                  />
                  <div class="absolute top-2 right-2">
                    <!-- <button
                      class="h-10 w-20 text-white rounded-lg bg-green-500 hover:bg-green-600"
                    >
                      Search
                    </button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            @click.prevent="deleteAllProducts(products)"
            class="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600 my-auto mx-10"
          >
            Delete All
          </button>
        </div>
        <!--END SEARCH BAR-->

        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <!---->
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    NAME
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    BRAND
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    COMMENT
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    EXPIRATION
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    QUANTITY
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    UNITS
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in filterdProducts" :key="product.key">
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {{ product.name }}
                          <!--name call-->
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ product.brand }}
                      <!--brand call-->
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ product.comment }}
                      <!--comment call-->
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ product.expiration }}
                      <!--date call-->
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ product.quantity }}
                      <!--quantity call-->
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ product.units }}
                      <!--units call-->
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <router-link
                      :to="{ name: 'edit', params: { id: product.key } }"
                      class="px-7 py-2 text-white rounded-lg bg-yellow-500 hover:bg-yellow-600"
                      >Edit</router-link
                    >
                    <button
                      @click.prevent="deleteProduct(product.key)"
                      class="ml-4 h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      products: [],
      search: "",
    };
  },
  created() {
    db.collection("products").onSnapshot((snapshotChange) => {
      this.products = [];
      snapshotChange.forEach((doc) => {
        this.products.push({
          key: doc.id,
          name: doc.data().name,
          brand: doc.data().brand,
          comment: doc.data().comment,
          expiration: doc.data().expiration,
          quantity: doc.data().quantity,
          units: doc.data().units,
        });
      });
    });
  },
  computed: {
    filterdProducts() {
      return this.products.filter((product) => {
        return (
          product.name.toLowerCase().match(this.search) ||
          product.brand.toLowerCase().match(this.search) ||
          product.comment.toLowerCase().match(this.search) ||
          product.expiration.match(this.search) ||
          product.quantity.match(this.search) ||
          product.units.toLowerCase().match(this.search)
        );
      });
    },
  },
  methods: {
    deleteProduct(id) {
      if (window.confirm("Do you really want to delete this product?")) {
        db.collection("products")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Product deleted succesfully !");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    deleteAllProducts() {
      if (
        window.confirm(
          "Do you really want to delete all the products from the inventory?\n NOTE: All the data will be lost permanently"
        )
      ) {
        db.collection("products")
          .get()
          .then((response) => {
            response.forEach((element) => {
              element.ref.delete();
            });
          });
      }
    },
  },
};
</script>