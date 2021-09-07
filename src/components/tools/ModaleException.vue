<template>

	<div class="fenetre" v-show="isVisible">
		<div class="card p-4 modaleException">
			<div v-on:click="hide" class="btn btn-danger btn-sm boutonX">X</div>
			<div class="m-3 p-1 message">
				{{ message }}
			</div>
			<div class="d-flex flex-row-reverse">
				<div v-on:click="hide" class="btn btn-danger">OK</div>
			</div>
		</div>
	</div>

</template>

<script>

export default {
	name: "ModaleException",
	data () {
		return {
			isVisible: false,
			message: ""
		}
	},
	methods: {
		show: function (msg) {
			this.message=msg
			this.isVisible=true
		},
		hide: function () {
			this.message=''
			this.isVisible=false
		}
	}
	
}
</script>

<style>
.fenetre{
	background: rgba(0,0,0,0.5);
	position: fixed;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	
}

.modaleException {
	background: rgba(0,0,0,0.5);
	border: black 2px solid;
	border-radius: 5px;
}

.boutonX {
	position: relative;
	top: 5px;
	right: 5px;
}

.message {

}



</style>
