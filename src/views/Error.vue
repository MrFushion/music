<template>
  <section class="text-center">
    <div class="max-w-lg mx-auto">
      <h1 class="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p class="text-xl text-gray-700 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <router-link
        :to="{ name: 'home' }"
        class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >Go Home</router-link
      >
    </div>
  </section>
</template>
<script>
export default {
  name: 'Error',
}
</script>
