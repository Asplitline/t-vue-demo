<template>
	<div class="">
		<input type="text" value="请输入..." />
		{{isShow}}
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	props: ['test', 'is-show'],
	data() {
		return {}
	},
	mounted() {
		console.log(this.test)
	}
}
</script>

<style lang="scss" scoped>
</style>
