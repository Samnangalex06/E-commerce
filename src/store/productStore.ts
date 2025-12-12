import { defineStore } from 'pinia';
import axios from 'axios';


export interface CategoryDto {
  name: string
  productCount: number
  color: string
  image: string
}

export interface PromotionDto {
  title: string
  buttonColor: string
  color: string
  image: string
}
export interface productDto{
  name : string
  rating :  number
  size : string
  image : string
  price : number
  promotionAsPercentage : number
  categoryId : number
  instock : number
  countSold : number
  group : string
}

export const useProductStore = defineStore('Product', {
  state: () => ({
    groups: [],
    promotions: [] as {
      title: string
      ButtonbgColor: string
      bgColor: string
      bannerImage: string
    }[],
    categories: [] as {
      categoryName: string
      num: number
      bgColor: string
      image: string
    }[],
    products: [] as {
      name : string
      rating :  number
      size : string
      image : string
      price : number
      promotionAsPercentage : number
      categoryId : number
      instock : number
      countSold: number
      group : string
    }[]
  }),
  getters:{
    getCategoriesByGroup: (state) => {
      return (groupName: string) => state.categories.filter(category => category.categoryName === groupName);
    },
    getProductsByCategory: (state) => {
      return (CategoryName: string) => state.products.filter(product => product.categoryId.toString() === CategoryName);
    },
  },
  actions: {
    async fetchCategories() {
      const result = await axios.get<CategoryDto[]>('http://localhost:3000/api/categories')
      this.categories = result.data.map((cat) => ({
        categoryName: cat.name,
        num: cat.productCount,
        bgColor: cat.color,
        image: `http://localhost:3000/${cat.image.replace(/\\/g, '/')}`
      }))

      console.log(this.categories)
    },

    async fetchBanners() {
      const result = await axios.get<PromotionDto[]>('http://localhost:3000/api/promotions')
      this.promotions = result.data.map((promo) => ({
        title: promo.title,
        ButtonbgColor: promo.buttonColor,
        bgColor: promo.color,
        bannerImage: `http://localhost:3000/${promo.image.replace(/\\/g, '/')}`
      }))
      console.log(this.promotions)
    },

    async fetchgroups() {
      const result = await axios.get("http://localhost:3000/api/groups");
      this.groups = result.data;
    },

    async fetchproducts() {
      const result = await axios.get<productDto[]>("http://localhost:3000/api/products");
      this.products = result.data.map((prod) => ({
        name: prod.name,
        rating: prod.rating,
        size: prod.size,
        price: prod.price,
        promotionAsPercentage: prod.promotionAsPercentage,
        categoryId: prod.categoryId,
        instock: prod.instock,
        group: prod.group,
        countSold: prod.countSold,
        image: `http://localhost:3000/${JSON.parse(prod.image.replace(/\\/g, '/'))}`
      }))
      console.log(this.products[0]);
    }
  }
});
