<template>
	<div class="modaleconfirmation" v-if="isVisible">
		<div class="card p-3 pt-5 fenetreConfirmation">
			<div v-on:click="annuler" class="btn btn-danger btn-sm boutonX">X</div>
			<p v-if="texte!=null">{{ texte }}</p>
			<p>{{ message }}</p>
			<div>
				<div v-on:click="confirmer" class="btn btn-primary m-1">OK</div>
				<div v-on:click="annuler" class="btn btn-primary m-1">ANNULER</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"ModaleConfirmation",
	data () {
		return {
			resolvePromise: undefined,
			texte: ''
			
		}
	},
	props: {
		message: {},
		isVisible: {
			default: false
		}
	},
	methods: {
		show: function (txt) {
			
			this.texte=txt
			
			this.isVisible=true
			
			return new Promise((resolve) => {
				this.resolvePromise = resolve
			})
			
		},
		hide: function () {
			this.isVisible=false
			this.texte=""
		},
		confirmer: function () {
			this.hide ()
			this.resolvePromise(true)
		},
		annuler: function () {
			this.hide ()
			this.resolvePromise(false)
		}
		
	}
	
}
</script>

<style>

.modaleconfirmation{
	background: rgba(0,0,0,0.5);
	position: absolute;
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

.fenetreConfirmation {
	border: black solid 1px;
}

.boutonX {
	position: absolute;
	top: 5px;
	right: 5px;
}

</style>