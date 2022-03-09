<template>
	<div class="">
		1111
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	mounted() {
		this.$once('hook:beforeDestroy', () => {
			console.log('hook => beforeDestroy')
		})
	},
	beforeDestroy() {
		console.log('beforeDestroy')
	}
}
</script>

<style lang="scss" scoped>
</style>
