<template>
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
</template>

<script lang="ts">
import Category from './components/Category.vue'
import Banner from './components/Promotion.vue'
import axios from 'axios';

  interface CategoryDto {
    name: string
    productCount: number
    color: string
    image: string
  }

  interface PromotionDto {
    title: string
    buttonColor: string
    color: string
    image: string
  }

  export default {
    name: 'App',
    components: {
      Category,
      Banner,
    },
    data() {
      return {
        categories: [] as {
          categoryName: string
          num: number
          bgColor: string
          image: string
        }[],
        banners: [] as {
          title: string
          ButtonbgColor: string
          bgColor: string
          bannerImage: string
        }[],
      }
    },

  methods: {
    async fetchCategories() {
      const result = await axios.get<CategoryDto[]>('http://localhost:3000/api/categories')
      this.categories = result.data.map((cat: CategoryDto) => ({
        categoryName: cat.name,
        num: cat.productCount,
        bgColor: cat.color,
        image: `http://localhost:3000/${cat.image.replace(/\\/g, '/')}`,
      }))
      console.log(result.data)
      console.log(this.categories)
    },

    async fetchBanners() {
      const result = await axios.get<PromotionDto[]>('http://localhost:3000/api/promotions')
      this.banners = result.data.map((promo: PromotionDto) => ({
        title: promo.title,
        ButtonbgColor: promo.buttonColor,
        bgColor: promo.color,
        bannerImage: `http://localhost:3000/${promo.image.replace(/\\/g, '/')}`,
      }))
      console.log(result.data)
      console.log(this.banners)
    },
  },

  mounted() {
    this.fetchCategories()
    this.fetchBanners()
  },
}
</script>

<style scoped>
.full_display {
  width: 100%;
  display: flex;
  flex-direction: column;
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
  margin-top: 75px;
  gap: 20px;
}
</style>

