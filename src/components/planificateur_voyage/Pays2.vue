<template>
	<div>
	
		<h1>PAYS 2</h1>

		<div class="paysFrame">
			<ul class="list-group">
				<li v-for="(pays,index) in listPays" v-bind:key="index" class="list-group-item lignePays">
					<div v-on:click="clickPays (pays.id)" v-on:mouseover="survolerPays (index)" v-on:mouseout="survolerPays (-1)" v-bind:class="index==indexSurvole ? 'survolerPays' : 'afficherPays'">
						{{ pays.id }}: {{ pays.pays }}
					</div>
	
						<div v-on:click="suppimerPays (pays.id)" v-on:mouseover="survolerPays (index)" v-on:mouseout="survolerPays (-1)" class="btn btn-danger btn-sm boutonX">X</div>
	
				</li>
			</ul>
		</div>
		
		<form>
			<div class="form-group">
				<label for="id">ID</label>
				<input id="id" v-model="formData.id" type="number" v-on:input="changeId" class="form-control">
			</div>
			
			<div class="form-group">
				<label for="pays">PAYS:</label>
				<input id="pays" v-model="formData.pays" class="form-control">
			</div>
		</form>
		
		<div class="d-flex flex-row-reverse m-3">
			<div v-on:click.stop="validerFormulaire" class="btn btn-primary">{{ libelleValider }}</div>
		</div>
		
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: "Pays2",
	data () {
		return {
			listPays: [],
			indexSurvole: -1,
			formData: {
				id: '',
				pays: '',
				
			},
			libelleValider: "Enregistrer"
			
		}
		
	},
	mounted () {
		
		this.chargerListPays ()
		
	},
	methods: {
		chargerListPays: function () {
			
			
			this.listPays=[]
			axios.get ('http://localhost:8080/api/planificateurvoyage/pays')
			.then (response => {
				
				for (const pays of response.data){
					
					this.listPays.push (pays)
					
				}
				
				
			})
			.catch (exception => {
				console.log (exception)
			})
		},
		clickPays: function (id) {
			console.log("clic="+id)
			
			axios.get ('http://localhost:8080/api/planificateurvoyage/pays/'+id)
			.then (response=>{
				this.formData.id=response.data.id
				this.formData.pays=response.data.pays
				this.changeId();
			})
			.catch(exception=> {
				console.log (exception)
			})
		},
		survolerPays: function (index) {

			this.indexSurvole=index;
				
		},
		validerFormulaire: function () {
			console.log ("valider formulaire")
			
			axios.post ('http://localhost:8080/api/planificateurvoyage/pays',this.formData)
			.then(response=>{
				
				this.chargerListPays ()
				
				this.formData.id=response.data.id
				this.libelleValider="Modifier"
				this.changeId();
				
				console.log ('le pays '+response.data.pays+' est enregistré')
			})
			.catch (exception =>{
				console.log(exception)
			})
 
		},
		changeId:function () {
			
			console.log ("changeId")
			
			if (this.formData.id==''){
				this.libelleValider="Enregistrer"
			}else{
				this.libelleValider="Modifier"
			}
			
		},
		suppimerPays: function (id) {
			
			console.log ("suppression du pays: "+id);
			
			axios.delete ('http://localhost:8080/api/planificateurvoyage/pays',{data: {"id":id} })
			.then (response=>{
				console.log ('pays '+response.data.id+' supprimé')
				
				this.chargerListPays ()
			})
			.catch (exception=>{
				console.log (exception)
			})
			
		}
		
		
	}

	
	
}
</script>

<style>

.paysFrame {
  height:300px;
  overflow-y: scroll;
}

.lignePays {
	border: 1px solid black;
}

.afficherPays {
	background: WhiteSmoke;
	color: black;
}

.survolerPays {
	background: black;
	color: WhiteSmoke;
}

.boutonX {
	position: absolute;
	right: 5px;
	top: 5px;
}


</style>
