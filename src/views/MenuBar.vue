<template>
  <div class="menu-bar">
    <h1>Melon Store</h1>
    <nav>
      <a href="#/">Home</a>
      <a href="#/categories/1">Category</a>
      <a href="#/products/1">Product</a>
    </nav>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.menu-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
}
.menu-bar nav a {
  color: white;
  margin-left: 15px;
  text-decoration: none;
}
</style>
