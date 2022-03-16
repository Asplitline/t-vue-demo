<template>
	<div id="app">
		<button @click="isExample=!isExample">toggle</button>
		<hr>
		<template v-if="isExample">
			<h2>Example</h2>
			<Example></Example>
		</template>
		<template v-else>
			<h2>Base</h2>
			<BaseComponent></BaseComponent>
		</template>

	</div>
</template>

<script>
import Example from '@/example'
import BaseComponent from '@/components'
export default {
	name: 'App',
	data() {
		return {
			isExample: true
		}
	},
	components: {
		Example,
		BaseComponent
	}
}
</script>

<style lang="scss" scoped>
</style>
