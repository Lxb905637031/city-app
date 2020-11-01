<template>
    <div class="header">
        <back-ward />
        <h1>{{ title }}</h1>
    </div>
</template>
<script>
import BackWard from './Sub/BackWard'
export default {
    name: 'CommonHeader',
    components: {
        BackWard
    },
    props: {
        title: {
            type: String,
            default: '一线生活通'
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@styles/mixins.scss';
@import '@styles/variables.scss';
	.header {
		position: relative;
		@include flex-row;
		@include vh-center;
        width: 100%;
		height: $headerHeight;
		background-color: $defaultBgColor;

		h1 {
			font-size: .18rem;
		}
	}
</style>