<template>
    <div class="list-wrapper">
        <ktv-list-sub
            v-for="(item,index) of ktvDatas"
            :key="index"
            :data="item"
        />
    </div>
</template>
<script>
import KtvListSub from './Sub'
export default {
    name: 'KtvList',
    components: {
        KtvListSub
    },
    props: {
        ktvDatas: {
            type: Array,
            require: true
        }
    }
}
</script>