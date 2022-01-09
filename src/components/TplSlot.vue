<template>
	<div class="tplSlot">
		<slot name="demo" :text="'demo'"></slot>
		<slot name="prepend" :text="' scopeSlot-'"></slot>
		<slot name="append">TplSlot-append</slot>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
