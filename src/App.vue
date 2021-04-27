<template>
  <div class="bg-layout w-full h-full">
          <h1 class="text-white text-center text-extrabold text-3xl py-12">My Inventory</h1>
    <div class="mb-5 ">
      <router-link to="/" class="bg-btn hover:bg-btn_change rounded-xl px-5 py-3 text-gray-50 font-extrabold">Add Products</router-link> 
      <router-link to="/inventory" class="bg-btn hover:bg-btn_change rounded-xl px-5 py-3 ml-4 text-gray-50 font-extrabold">View inventory</router-link>
    </div>
    <router-view/>
  </div>
</template>


