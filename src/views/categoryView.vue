<template>
   <div class = "category-display">
        <img id = "background" src="/images/banner/backgound.png"/>
   </div> 
</template>


<script lang="ts">
import HomeView from '../components/Category.vue';
export default{
    name: 'categoryView',
    components: {
        HomeView,
    },
}
</script>

<style scoped>
    .category-display{
        display: flex;
        justify-content: center;
        
    }
    #background{
        width: 1800px;
    }

</style>