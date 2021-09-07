<template>
	<div>
		<h1>Page 5</h1>
		
		<div class="d-inline-flex">
			<composant-slot class="m-3">
			
				<template v-slot:haut>bonjour</template>
			
				<template v-slot:bas>Au revoir</template>
			
			</composant-slot>
		
			<composant-slot class="m-3">
			
				<template v-slot:haut>
					<p>$route...valeur={{ adresseTxt }}</p>
					<p>saisie= {{ txt }}</p>
				</template>
			
			
				<template v-slot:bas>
					<div class="form-group">
						<label for="leTexte2">la zone de saisie</label>
						<input v-model="txt" id="leTexte2" class="form-control" />
					</div>
				
					<div v-on:click="razForm2"  class="btn btn-danger">le bouton RAZ</div>
				</template>
			
			</composant-slot>
		</div>	
	</div>
</template>

<script>
import ComposantSlot from './tools/ComposantSlot'

export default {
	name: "Page5",
	data () {
		return {
			txt: ""
		}
	},
	mounted() {
		this.txt=this.$route.params.valeur
	},
	computed: {
		adresseTxt: function () {
			return this.$route.params.valeur
		}
	},
	watch:{
		$route: function () {
			this.txt=this.$route.params.valeur
		}
	},
	components: {
		'composant-slot': ComposantSlot
	},
	methods: {
		razForm2: function () {
			this.txt=""
		}
		
	}
	
}

</script>

<style>

</style>
