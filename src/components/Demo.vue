<template>
	<div>
		<a href="javascript:;" @click="exchange">
			{{$t('btn.exchange')}}
		</a>
		<ul>
			<li>{{$t('btn.back')}}</li>
			<li>{{$t('btn.all')}}</li>
			<li>{{$t('btn.logout')}}</li>
			<li>{{$t('btn.unbind')}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	methods: {
		exchange() {
			this.$i18n.locale = this.$i18n.locale === 'zh-CN' ? 'en-US' : 'zh-CN'
		}
	}
}
</script>

<style>
</style>
