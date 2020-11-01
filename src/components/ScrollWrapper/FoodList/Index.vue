<template>
    <div class="list-wrapper">
        <food-list-sub
            v-for="(item,index) of foodDatas"
            :key="index"
            :data="item"
        />
    </div>
</template>
<script>
import FoodListSub from './Sub'
export default {
    name: 'FoodList',
    components: {
        FoodListSub
    },
    props: {
        foodDatas: {
            type: Array,
            require: true
        }
    }
}
</script>