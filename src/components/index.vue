<template>
	<div class="">
		<input type="number" placeholder="请输入 a" v-model="a">
		<input type="number" placeholder="请输入 b" v-model="b">
		<base-scroll-number :num="a"></base-scroll-number>+
		<base-scroll-number :num="b"></base-scroll-number>=
		<base-scroll-number :num="c"></base-scroll-number>
	</div>
</template>

<script>
export default {
	data() {
		return {
			a: '',
			b: ''
		}
	},
	computed: {
		c() {
			return this.a + this.b
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
