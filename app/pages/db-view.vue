<script lang="ts" setup>
import PageLayout from "~/layout/page-layout.vue";
definePageMeta({
  middleware: 'auth',
})

const cars = ref();

async function fetchCars(): Promise<void> {
  const { data } = await useFetch('/api/getCars');
  cars.value = await data;
}

await fetchCars();

</script>

<template>
  <page-layout>
    This is a database view point

    <hr>
    <table>
      <tr class="car" v-for="car in cars.value">
        <th>{{car.name}}</th>
        <th>{{car.brand}}</th>
        <th>{{car.price}}</th>
      </tr>
    </table>
  </page-layout>
</template>

<style scoped>

</style>