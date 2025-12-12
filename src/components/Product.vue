<template>
  <div class="card">

    <!-- Discount badge -->
    <div v-if="promotionAsPercentage" class="discount-badge">
      -{{ promotionAsPercentage }}%
    </div>

    <!-- Product Image -->
    <img class="product-image" :src="image" alt="product image">

    <!-- Product Info -->
    <p class="brand">Hado Foods</p>
    <p class="product-name">{{ name }}</p>

    <!-- Rating -->
    <div class="rating" v-if="rating">
      ⭐⭐⭐⭐⭐
      <span class="rating-value">({{ rating }})</span>
    </div>
    <!-- Size -->
    <p class="product-size">{{ size }}</p>

    <!-- Price Section -->
    <div class="price-section">
      <span class="price">${{ price }}</span>
      <span class="old-price">2.51</span>
    </div>

    <!-- Quantity Selector -->
    <select class="qty-selector" v-model="qty">
      <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
    </select>

  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductCard',
  props:{
    image:{
      type: String,
      default: ''
    },
    name: String,
    size: String,
    promotionAsPercentage: Number,
    price: Number,
    rating: Number
  },
  data() {
    return {
      qty: 1
    };
  }
}
</script>

<style scoped>
.card {
  position: relative;
  width: 230px;
  padding: 16px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Discount badge */
.discount-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #57cc99;
  color: white;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 12px;
}

/* Product image */
.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 15px;
}

.brand {
  font-size: 12px;
  color: #999;
}

.product-name {
  font-size: 15px;
  font-weight: bold;
  color: #333;
}

.rating {
  font-size: 14px;
  color: #f5a623;
}


.product-size {
  font-size: 13px;
  color: #777;
}

.price-section {
  display: flex;
  gap: 10px;
}

.price {
  font-size: 20px;
  color: #28a745;
  font-weight: bold;
}

.old-price {
  text-decoration: line-through;
  color: #aaa;
}

.qty-selector {
  width: 60px;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid #20b3e0;
  align-self: flex-end;
}

</style>
