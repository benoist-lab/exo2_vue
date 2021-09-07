<template>
	<div>

		<h1>Page 7</h1>

		<h2>le store</h2>

			<p>$store.count= {{ getStoreCount }}</p>
			<div v-on:click="incrementerStoreCount" class="btn btn-primary">incrémenter</div>



	</div>
</template>

<script>
export default {
	name: "page7",
	methods: {
		incrementerStoreCount: function () {
			this.$store.commit ('increment')
			
			console.log ("store.count="+this.$store.state.count)
		}
	},
	computed: {
		getStoreCount: function () {
			return this.$store.state.count
		}
	}
	
}
</script>

<style></style>