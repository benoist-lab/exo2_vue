<template>

	<div class="composant">
		<div class="haut">
			<slot name="haut">haut</slot>
		</div>
	
		<div class="bas">
			<slot name="bas">bas</slot>
		</div>
	</div>

</template>

<script>

export default {
	name: 'ComposantSlot'
	
	
}

</script>

<style>
.composant{
	background: Cyan;
	border: red solid 3px;
	border-radius: 5px;
	width: 200px;
	height: 500px;
}

.haut {
	background: AliceBlue;
	border: black solid 1px;
	border-radius: 5px;
	width: 150px;
	height: 100px;
	margin-top:24px;
	margin-left: 24px;
}

.bas {
	background: Azure;
	border: black solid 1px;
	border-radius: 5px;
	width: 150px;
	height: 300px;
	margin-top:24px;
	margin-left: 24px;
}


</style>
