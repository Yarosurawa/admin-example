<script lang="ts" setup>
import PageLayout from "~/layout/page-layout.vue";
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <page-layout>
    <p>Hello</p>
  </page-layout>
</template>
