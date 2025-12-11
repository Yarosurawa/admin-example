<script setup lang="ts">
import PageLayout from "~/layout/page-layout.vue";
definePageMeta({
  middleware: 'auth',
})

const carValues = reactive({
  name: '',
  brand: '',
  price: '',
})

async function addCar() {
  try {
    await $fetch('/api/addCar', {
      method: "POST",
      body: carValues
    })

    alert("Car added :)")
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <page-layout>
    <form @submit.prevent="addCar">
      <input type="text" v-model="carValues.name" placeholder="Car name" required />
      <input type="text" v-model="carValues.brand" placeholder="Brand name" required />
      <input type="text" v-model="carValues.price" placeholder="car price" required />
      <input type="submit">
    </form>
  </page-layout>
</template>