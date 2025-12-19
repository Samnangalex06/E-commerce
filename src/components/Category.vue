<template>

  <div class="card" :style="{ backgroundColor : bgColor}">
      <img id="category-image" :src="image" alt="">
      <p id="category-name">{{ categoryName }}</p>
      <p id="category-num">{{ num }} items</p>
  </div>

</template>
<script lang="ts">
export default {
  name: 'CategoryCard',
  props: {
      categoryName: {
          type: String,
          required: true
      },
      num: {
          type: Number,
          required: true
      },

      bgColor: {
          type: String,
          default: '#ffffff'
      },
      image: {
          type: String,
          default: ''
      }
  }
}
</script>

<style scoped>

  .card {
    width: 100%;
    max-width: 140px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  #category-image {
    width: 100px;
    height: 100px;
  }
  #category-name {
    font-size: 16px;
    color: rgba(37, 61, 78, 1);
  }
  
  #category-num {
    font-size: 11px;
    padding-bottom: 5px;
    color: rgba(182, 182, 182, 1);
  }
</style>
