<template>
  <div class="app">
    <div class="promotion-display">
      <div class="promotion-text ">
        <h1>Don’t miss amazing grocery deals</h1>
        <p>Sign up for the daily newsletter</p>
        <input id = "email" placeholder="Your Email address" type="text">
          <button id = "submit-email">subscribe</button>
        </input>
      </div>
      <img id="promotion-img" src="/images/category/Promotion.png" alt="Promotion"/>
    </div>

    <div class="feature-category">
      <h1>Feature Category</h1>

      <div class="feather">
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
    </div>

    <div class="full_display">
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
    </div>

    <!-- Popular Products -->
    <div class="popular-product">
      <h1>Popular Products</h1>

      <div class="product-feature">
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
    </div>

    <div class="full_display">
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

  </div>
</template>

<script lang="ts">
import Category from '../components/Category.vue'
import Banner from '../components/Promotion.vue'
import Product from '../components/Product.vue';
import { useProductStore } from '../store/productStore';
export default {
  name: 'HomeView',
  components: {
    Category,
    Banner,
    Product,
  },
  data() {
    return {
      productStore: useProductStore(),
      currentGroupName: ''
    }
  },
  computed: {
    // expose store state to the template
    categories(this: { productStore: ReturnType<typeof useProductStore> }) {
      return this.productStore.categories;
    },
    banners(this: { productStore: ReturnType<typeof useProductStore> }) {
      return this.productStore.promotions;
    },
    products(this: {productStore: ReturnType<typeof useProductStore>}){
      return this.productStore.products;
    }
  },
  async created() {
    const productStore = useProductStore();

    await productStore.fetchCategories();
    await productStore.fetchBanners();
    await productStore.fetchproducts();
  }
}
</script>

<style scoped>
@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.full_display {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.category-display {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.banner_display {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  gap: 20px;
}
.product-display {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
.product-display > * {
  transition: transform 0.35s ease;
}
.product-display > *:hover {
  transform: scale(1.03);
}
.category-display > * {
  transition: transform 0.3s ease;
}
.category-display > *:hover {
  transform: scale(1.05);
}

.banner_display > * {
  transition: transform 0.35s ease;
}
.banner_display > *:hover {
  transform: scale(1.03);
}
.feature-category{
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
  margin-left: 50px;
}
ul{
  list-style-type: none;
  padding-top: 10px;
  gap: 20px;
  display: flex;
  font-size: 17px;
}
.popular-product{
  display: flex;
  justify-content: space-between;
  margin: 40px;
}
.promotion-display {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

#promotion-img {
  width: 1800px;
  height: 500px;
}
.promotion-text {
  position: absolute; 
  left: 60px;
  top: 50%;
  transform: translateY(-50%);
  max-width: 45%;
  color: #253D4E;
}
.promotion-text h1{
  font-size: 60px;
}
.promotion-text p{
  font-size: 20px;
  font-weight:lighter;
}

#email{
  width: 350px;
  font-size: 14px;

}

#submit-email{
  width: 150px;
  background-color: #3BB77E;
  color: white;
   font-size: 15px;
}
#email, #submit-email{
  border: none;
  box-shadow: black;
  height: 50px;
}
</style>
