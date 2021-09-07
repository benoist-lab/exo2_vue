<template>

	<div v-bind:class="isVisible" class="card tooltipCSS p-3">
		{{ message }}
	</div>

</template>

<script>

export default {
	name: "Tooltip",
	data () {
		return {
			isVisible:  "invisible",
			message: ""
		}
	},
	methods: {
		show: function (message) {
			this.message=message
			this.isVisible=""
			setTimeout (
				() =>{
					this.isVisible="invisible"
					this.message=""
				}
				,3000
				);
		}
	}
}

</script>

<style>
.tooltipCSS{
	background: snow;
	position: absolute;
	right: 5px;
	bottom: 5px;
	border: black solid 1px;
	opacity: 0.6;
	
}
.invisible{
	display: '';
}



</style>
