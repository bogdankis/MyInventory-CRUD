<template>
  <div
    class="flex justify-center h-screen items-center bg-gray-200 antialiased"
  >
    <form @submit.prevent="editForm">
      <div
        class="flex flex-col w-72 mx-auto rounded-lg border border-gray-300 shadow-xl"
      >
        <div
          class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p class="font-semibold text-gray-800">Modify product</p>
        </div>

        <div class="flex flex-col px-6 py-5 bg-gray-50">
          <p class="mb-2 font-semibold text-gray-700">Name</p>
          <input
            v-model="product.name"
            class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: shadow-outline"
            name="name"
            type="text"
            placeholder="Enter new name"
          />
          <p class="mb-2 font-semibold text-gray-700">Brand</p>
          <input
            v-model="product.brand"
            class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: shadow-outline"
            name="brand"
            type="text"
            placeholder="Enter new brand"
          />
          <p class="mb-2 font-semibold text-gray-700">Comment</p>
          <input
            v-model="product.comment"
            class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: shadow-outline"
            name="comment"
            type="text"
            placeholder="Enter a new comment"
          />
          <p class="mb-2 font-semibold text-gray-700">Expiration Date</p>
          <input
            v-model="product.expiration"
            class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: shadow-outline"
            name="expiration"
            type="date"
            placeholder="Enter new date"
          />
          <p class="mb-2 font-semibold text-gray-700">Quantity</p>
          <input
            v-model="product.quantity"
            class="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: shadow-outline"
            name="quantity"
            type="number"
            placeholder="Enter new quantity"
          />
          <p class="mb-2 font-semibold text-gray-700">Units</p>
          <select
            v-model="product.units"
            class="mb-7 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus: shadow-outline"
          >
            <option>Pieces</option>
            <option>Kg</option>
            <option>Liters</option>
          </select>
        </div>

        <div
          class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
          <button
            class="font-semibold text-gray-600 p-2 hover:bg-gray-300"
            @click="$router.go(-1)"
          >
            Cancel
          </button>
          <button
            class="px-4 py-2 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded"
          >
            Save
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
  created() {
    let dbRef = db.collection("products").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.product = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    editForm(event) {
      event.preventDefault();
      db.collection("products")
        .doc(this.$route.params.id)
        .update(this.product)
        .then(() => {
          console.log("Product updated succesfully");
          this.$router.push("/inventory");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

