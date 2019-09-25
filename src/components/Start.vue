<template>
	<div class="flex">
		<div class="text-center">
			<hr>
			<h1>Простой тест на знание html тегов</h1>
			<router-link tag="h3" class="mt-5" :to="{ name: 'test' }">
			    <a>Поехали</a>
			</router-link>
			<hr>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.flex{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50vh;	
	}
	.text-center{
		text-align: center;
	}
</style>