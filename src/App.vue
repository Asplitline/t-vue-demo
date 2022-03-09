<template>
	<div id="app">
		<template v-if="isExample">
			<h2>Example</h2>
			<Example></Example>
		</template>
		<template v-else>
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
