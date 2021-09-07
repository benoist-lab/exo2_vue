<template>

	<div class="modale-info" v-if="isVisible">
	
		<div class="card p-3">{{ message }}</div>
		
		

	</div>

</template>

<script>
	export default {
		name: "ModaleInfo",
		props: {
			message: {},
			isVisible: {
				value: false
			}
		}
		
	}

</script>

<style>

.modale-info{
	background:  rgba(0,0,0,0.5);
	position: fixed;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}




</style>
