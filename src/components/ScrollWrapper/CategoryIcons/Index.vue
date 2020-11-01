<template>
    <div class="icons-wrapper">
        <category-icon-sub
            v-for="item of fieldDatas"
            :key="item.id"
            :bgColor="item.bgColor"
            :icon="item.icon"
            :field="item.field"
            :iconText="item.iconText"
        />
    </div>
</template>
<script>
import CategoryIconSub from './Sub'
import fieldDatas from '@data/fields'
export default {
    name: 'CategoryIcons',
    components: {
        CategoryIconSub
    },
    data() {
        return {
            fieldDatas
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@styles/mixins.scss';
@import '@styles/variables.scss';
.icons-wrapper {
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>