<template>
	<div>
		<h1>Page 3</h1>
		
		<h2>Formulaire</h2>
		<form class="formulaire p-5">
		
			<!--  Checkbox -->
			<p class="mb-1">checkBox</p>
			<div class="form-check">
				<label for="fraise" class="form-check-label">
					<input v-model="formData.tableauFruits" type="checkbox" id="fraise" value="fraise" class="form-check-input">
					Fraise
				</label>
			</div>
			
			<div class="form-check">
				<label for="pomme" class="form-check-label">
					<input v-model="formData.tableauFruits" type="checkbox" id="pomme" value="pomme" class="form-check-input">Pomme
				</label>
			</div>
			
			<div class="form-check">
				<label for="cerisses" class="form-check-label">
					<input v-model="formData.tableauFruits" type="checkbox" id="cerrises" value="cerisses" class="form-check-input">Cerisses
				</label>
			</div>
			
			<!-- ComboBox -->
			<div class="form-group">
				<label for="pays">Pays:</label>
				<select id="pays" v-model="formData.selectChoix" class="form-control">
					<option v-for="(pays,index) in tabPays" v-bind:key="index">{{ pays }}</option>
				</select>
			</div>
			
			<!-- radio -->
			<div v-for="(couleur,index) in tabCouleur" v-bind:key="index" class="form-check">
				<label class="form-check-label">
					<input v-model="formData.radioCouleur" type="radio" class="form-check-input" v-bind:id="couleur" v-bind:value="couleur" />{{ couleur }}
				</label>
			</div>
		
		</form>
		<br/>
		<h2>Resultat:</h2>
		<h3>Checkbox</h3>
		{{ formData.tableauFruits }}
		<ul>
			<li v-for="(fruit,index) in formData.tableauFruits" v-bind:key="index">{{ fruit }}</li>
		</ul>
		<h3>ComboBox</h3>
		comboBox= {{ formData.selectChoix }}
		<h3>Radio</h3>
		radioCouleur={{ formData.radioCouleur }}
	</div>
</template>

<script>
export default {
	name: "Page3",
	data() {
		return {
			formData: {
				tableauFruits: [],
				selectChoix: "",
				radioCouleur: ""
			},
			tabPays: ["Russie","Japon","Canada","Mexique"],
			tabCouleur: ["Bleu","Blanc","Rouge"]
			
		}
	}
	
	
}
</script>

<style>
.formulaire {
	border: black solid 1px;
	border-radius: 5px;
}
</style>