<template>

	<div>
	
		<h1 class="align-text-bottom">Les Pays</h1>
		
		<hr/>
		
		<ul>
		
			<li v-bind:key="index" v-for="(pays,index) in lesPays">
			
				<span v-on:click="clickPays (pays.id)">
					{{ pays.id }}: {{ pays.pays }}
				</span>
			
			</li>
		
		
		</ul>
				
		<hr/>
		
		<form>
		
			<div class="form-group">
				<label for="id">ID: </label>
				<input v-model="formData.id" v-on:input="idChange" type="number" id="id" class="form-control" />
			</div>
		
			<div class="form-group">
				<label for="pays">PAYS: </label>
				<input v-model="formData.pays" type="text" id="pays" class="form-control" />
			</div>
		
		
		
		</form>
		
		<div class="d-flex flex-row-reverse m-3">
		
			<div id="valider" v-on:click="valider"  class="btn btn-primary bvalider">{{ boutonValider }}</div>
			
		</div>
		
		
		{{ message }}

	
	</div>

</template>

<script>
import axios from 'axios'
export default {
	name: 'pays',
	data () {
		return {
			message: '',
			lesPays: [],
			boutonValider: "Cr�ation",
			formData: {
				id: '',
				pays: ''
				
			}
		}
	},
	mounted () {
		this.chargerPays ();
	},
	methods: {
		chargerPays: function () {
			axios.get ("http://localhost:8080/api/planificateurvoyage/pays")
			.then (response => {
				console.log (response)
				this.lesPays=[]
				for (const unPays of response.data)
				{
					this.lesPays.push (unPays);
				}
				
				console.log ("Pays chargé.")
			})
			.catch(error => {
				console.log("!!!ERROR!!!"+error);
			})
		},
		clickPays: function (id) {
			console.log ("CLICK: "+id);
			
			axios.get ('http://localhost:8080/api/planificateurvoyage/pays/'+id)
			.then (response => {
				
				console.log (response.data.id);		// DATA: [object Object] ????? proviens de service???
				
				this.formData.id=response.data.id
				this.formData.pays=response.data.pays
				
				this.idChange ();
				
			})
			.catch(error => {
                console.log("!!!ERROR!!!"+error);
            })
			
			//this.formData.id=id
		},
		idChange: function () {
			
			console.log ("idChange");
			
			if (this.formData.id==''){
				this.boutonValider="Cr�ation"
			} else {
				this.boutonValider="Mettre a jour"
			}
			
		},
		valider: function () {
			
			console.log("CLIK VALIDER")

			if (this.formData.id==''){
				
				// CREATION
				//alert ("creation");
				this.message="creation";
				
				
				
			}else{
				
				// MAJ
				//alert ("valider");
				this.message="valider";
				

			} 
			
			axios.post ('http://localhost:8080/api/planificateurvoyage/pays',this.formData)
			.then (() => {
				this.chargerPays ()
				
				console.log ("Pays "+this.message)
			})

			
		}
		
	}
	
	
}

</script>

<style>
	.bvalider {
		/*text-align: right;*/
	}

</style>
