<template>
  <div class="app">
    <MenuBar />

    <!-- Feature Category -->
    <div class="feature-category">
      <h1>Feature Category</h1>
      <ul>
        <li>All</li>
        <li>Milk & Dairy</li>
        <li>Coffee & Tea</li>
        <li>Pet Food</li>
        <li>Meats</li>
        <li>Vegetables</li>
        <li>Fruits</li>
      </ul>
    </div>

    <!-- Categories -->
    <div class="category-display">
      <Category
        v-for="category in categories"
        :key="category.categoryName"
        :image="category.image"
        :categoryName="category.categoryName"
        :num="category.num"
        :bgColor="category.bgColor"
      />
    </div>

    <!-- Banners -->
    <div class="banner_display">
      <Banner
        v-for="banner in banners"
        :key="banner.title"
        :title="banner.title"
        :bgColor="banner.bgColor"
        :bgImage="banner.bannerImage"
        :ButtonbgColor="banner.ButtonbgColor"
      />
    </div>

    <!-- Popular Products -->
    <div class="popular-product">
      <h1>Popular Products</h1>
      <ul>
        <li>All</li>
        <li>Milk & Dairy</li>
        <li>Coffee & Tea</li>
        <li>Pet Food</li>
        <li>Meats</li>
        <li>Vegetables</li>
        <li>Fruits</li>
      </ul>
    </div>

    <!-- Products -->
    <div class="product-display">
      <Product
        v-for="product in products"
        :key="product.name"
        :image="product.image"
        :name="product.name"
        :size="product.size"
        :percentage="product.promotionAsPercentage"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Category from "../components/Category.vue";
import Banner from "../components/Promotion.vue";
import Product from "../components/Product.vue";
import MenuBar from "./MenuBar.vue"; // ✅ SAME folder (views)

import { useProductStore } from "../store/productStore";

export default {
  name: "HomeView",
  components: {
    Category,
    Banner,
    Product,
    MenuBar,
  },

  computed: {
    categories() {
      return useProductStore().categories;
    },
    banners() {
      return useProductStore().promotions;
    },
    products() {
      return useProductStore().products;
    },
  },

  async created() {
    const store = useProductStore();
    await store.fetchgroups();
    await store.fetchCategories();
    await store.fetchBanners();
    await store.fetchproducts();
  },
};
</script>


<style scoped>
.full_display {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-display,
.banner_display,
.product-display {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 30px 0;
  flex-wrap: wrap;
}

.feature-category,
.popular-product {
  display: flex;
  justify-content: space-between;
  margin: 40px;
}

ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding-top: 10px;
  font-size: 17px;
}
</style>
