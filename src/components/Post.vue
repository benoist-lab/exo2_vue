<template>
	<h1>le post num�ro {{ id }}</h1>
</template>

<script>

	export default {
		name: 'Post',
		data () {
			return {
				id: this.$route.params.id
			}
		}
	}
</script>

<style></style>