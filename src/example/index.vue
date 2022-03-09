<template>
	<div id="app">
		<example-i18n></example-i18n>
		<!-- <example-prop-or-attr></example-prop-or-attr> -->
		<example-sync v-bind.sync="obj"></example-sync>
		{{obj.a}}
		{{obj.b}}
		<div ref="testRef">testRef</div>
		<example-ref-cmp ref="refCmp"></example-ref-cmp>
		<example-once-hook v-if="show"></example-once-hook>
		<button @click="show=!show">toggle</button>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			obj: {
				a: 1,
				b: 2
			},
			show: true
		}
	},
	components: {},
	mounted() {
		console.log(this.$refs.testRef)
		console.log(this.$refs.refCmp)
		console.log(this.$refs.refCmp.$el)
	}
}
</script>

<style lang="scss">
</style>
