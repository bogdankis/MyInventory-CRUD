<template>
  <div
    class="h-screen overflow-hidden flex items-center justify-center"
    style="background: #edf2f7"
  >
    <form @submit.prevent="submitProduct">
      <div class="flex-col items-center justify-center">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            v-model="product.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Enter product name"
            required
          />
        </div>
        <!--Precum div-ul de la linia 5 aranjezi restul div-urilor-->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Brand
          </label>
          <input
            v-model="product.brand"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="brand"
            type="text"
            placeholder="Enter brand"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Comment
          </label>
          <input
            v-model="product.comment"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="comment"
            type="text"
            placeholder="Enter comment"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Date">
            Expiration Date
          </label>
          <input
            v-model="product.expiration"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="date"
            type="date"
            placeholder="Enter date"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Quantity
          </label>
          <input
            v-model="product.quantity"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="quantity"
            type="number"
            placeholder="Enter quantity"
            required
          />
        </div>

        <div class="flex justify-center">
          <label class="mb-4 block text-gray-700 text-sm font-bold mb-2"
            >Units:
          </label>
          <div class="ml-2 col-sm-10 col-md-10">
            <select v-model="product.units">
              <option>Pieces</option>
              <option>Kg</option>
              <option>Liters</option>
            </select>
          </div>
        </div>

        <div class="mb-4 flex items center justfity between">
          <button
            class="py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700 text-white fond-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    submitProduct(event) {
      event.preventDefault();
      db.collection("products")
        .add(this.product)
        .then(() => {
          alert("Product added succesfully!");
          this.product.name = "";
          this.product.brand = "";
          this.product.comment = "";
          this.product.expiration = "";
          this.product.quantity = null;
          this.product.units = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>