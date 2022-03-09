<template>
	<div class="">
		<button @click="changeVal('a')">change - a</button>
		<button @click="changeVal('b')">change - b</button>
	</div>
</template>

<script>
export default {
	props: ['a', 'b'],
	data() {
		return {}
	},
	mounted() {
		console.log(this.a, this.b)
	},
	methods: {
		changeVal(key) {
			this.$emit('update:' + key, this[key] + 1)
		}
	}
}
</script>

<style lang="scss" scoped>
</style>