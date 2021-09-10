<template>
	<div>

		<h1>Page 7</h1>

		<h2>le store</h2>

			<p>$store.count= {{ getStoreCount }}</p>
			<div class="d-inline-flex">
				<p>Mutation: </p>
				<div v-on:click="incrementerStoreCount" class="btn btn-primary m-1">incrémenter</div>
				<div v-on:click="add10StoreCount" class="btn btn-primary m-1">+10</div>
				<div v-on:click="add20StoreCount" class="btn btn-primary m-1">+20</div>
			</div>
			
			<div class="D-inline-flex">
				<p>Action: </p>
				<div v-on:click="incrementerStroreCountDiffere" class="btn btn-secondary">differe +1</div>
			</div>
			
			<h3>Getters</h3>
			<p>getCentiemeCount= {{ doneCentiemeCount }}%</p>
			<P>getTodoById= {{ doneDeuxiemeTodo }}</P>

	</div>
</template>

<script>
export default {
	name: "page7",
	methods: {
		incrementerStoreCount: function () {
			this.$store.commit ('increment')		// MUTATION
			
			console.log ("store.count="+this.$store.state.count)
		},
		add10StoreCount (){
			this.$store.commit ("addCounter",10)
		},
		add20StoreCount (){
			this.$store.commit ("addCounter",20)
		},
		incrementerStroreCountDiffere () {
			this.$store.dispatch ("incrementDiffere")
		}
	},
	computed: {
		getStoreCount: function () {
			return this.$store.state.count
		},
		doneCentiemeCount: function () {
			return this.$store.getters.getCentiemeCount
		},
		doneDeuxiemeTodo: function () {
			return this.$store.getters.getTodoById (1)
		}
	}
	
}
</script>

<style></style>