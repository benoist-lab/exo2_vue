<template>
	<div>
		<h1>Page 4</h1>

		<form>
			<!-- mot -->
			<div class="form-group">
				<label for="mot">Mot:</label>
				<input id="mot" v-model="formData.mot" class="form-control" />
			</div>
		
			<!--  Checkbox lettre -->
			<div class="form-check">
				<input v-model="formData.tabLettre" type="checkbox" id="a" value="a" class="form-check-input"> 
				<label for="a">A</label>
			</div>
		
		
			<div class="form-check">
				<input v-model="formData.tabLettre" type="checkbox" id="b" value="b" class="form-check-input">
				<label for="b">B</label>
			</div>
			
			<div class="form-check">
				<input v-model="formData.tabLettre" type="checkbox" id="c" value="c" class="form-check-input">
				<label for="id">C</label>
			</div>
		
		</form>		
		
		<h2>resultat</h2>
		<div>
			<h3>mot</h3>
			{{ formData.mot }}
			
			<h3>lettre:</h3>
			<ul>
				<li v-for="(lettre,index) in formData.tabLettre" v-bind:key="index">{{ lettre }}</li>
			</ul>
		</div>
		
		<div v-on:click="emettreException" class="btn btn-danger">Emmettre exception</div>

	</div>
</template>

<script>
import {bus} from '../main.js'

export default {
	name: "Page4",
	data () {
		return {
			formData: {
				mot: "",
				tabLettre: []
			}
		}
	},
	methods: {
		emettreException: function () {
			try{
				throw new Error ("une exception émise")
			}catch (e) {
				bus.$emit ("error",e)
			}
		}
	}

}
</script>

<style></style>