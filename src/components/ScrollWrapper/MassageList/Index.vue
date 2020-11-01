<template>
    <div class="list-wrapper">
        <massage-list-sub
            v-for="(item,index) of massageDatas"
            :key="index"
            :data="item"
        />
    </div>
</template>
<script>
import MassageListSub from './Sub'
export default {
    name: 'MassageList',
    components: {
        MassageListSub
    },
    props: {
        massageDatas: {
            type: Array,
            require: true
        }
    }
}
</script>