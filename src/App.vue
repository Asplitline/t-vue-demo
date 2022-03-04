<template>
	<div id="app">
		<!-- <example-prop-or-attr></example-prop-or-attr> -->
		<example-sync v-bind.sync="obj"></example-sync>
		{{obj.a}}
		{{obj.b}}
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
			}
		}
	},
	components: {}
}
</script>

<style lang="scss">
</style>
