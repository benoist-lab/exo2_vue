<template>
	<div class="carteInfo">
		<div class="titreCarteInfo">
			<slot name="titre">le titre</slot>
		</div>
		<div class="valeurCarteInfo">
			<slot name="valeur">la value</slot>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
.carteInfo {
	background: Cyan;
	border: black solid 1px;
	border-radius: 5px;
	width: 200px;
	height: 500px;
}

.titreCarteInfo {
	background: AliceBlue;
	border: black solid 1px;
	border-radius: 5px;
	width: 150px;
	height: 100px;
	margin-top: 25px;
	margin-left: 25px;
}

.valeurCarteInfo {
	background: Azure;
	border: black solid 1px;
	border-radius: 5px;
	width: 150px;
	height: 300px;
	margin-top: 25px;
	margin-left: 25px;
	overflow: auto;
}
</style>