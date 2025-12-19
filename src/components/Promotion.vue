<template>
    <div class="card" :style="{ backgroundColor: bgColor, backgroundImage: 'url(' + bgImage + ')' }">
        <div class="content">
           <p>{{ title }}</p>
           <ModButton :buttonbgColor="ButtonbgColor"/>
        </div>
    </div>
</template>

<script lang="ts">
    import ModButton from './Button.vue';
    export default {
        name: 'BannerCard',
        components: {
            ModButton
        },
        props: {
            bgColor: {
                type: String,
                default: '#ffffff'
            },
            title: {
                type: String,
                default: ''
            },
            bgImage: {
                type: String,
                default: ''
            },
            ButtonbgColor: {
                type: String,
                default: '#ffffff'
            }

        }
    }
</script>

<style scoped>
    .card {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        max-width: 512px;
        height: 300px;
        border-radius: 10px;
        background-position: right bottom;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
        width: 60%;
        height: 100%;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        font-size: 24px;
        color: #253D4E;
    }
    
</style>
