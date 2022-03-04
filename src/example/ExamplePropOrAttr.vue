<template>
	<div class="">
		<div is="Demo" value="123132"></div>
		<div :value.prop="123456"></div>
		<base-input :test="123"></base-input>
	</div>
</template>

<script>
import Demo from '@/components/Demo'
export default {
	data() {
		return {}
	},
	components: {
		Demo
	}
}
</script>

<style lang="scss" scoped>
</style>
