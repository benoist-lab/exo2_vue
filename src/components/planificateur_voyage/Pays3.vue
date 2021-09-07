<template>
	<div>
	
		<div class="z-index: 0">
		
		
			<h1>PAYS 3</h1>
	
			
			<div v-if="erreurChargerPays!=''" class="alert alert-danger">
				Impossible de charger les pays => {{ erreurChargerPays }}
				<div v-on:click="chargerListPays" class="btn btn-danger m-3">Réessayer</div>
			</div>
			<div class="paysFrame" ref="paysFrame" v-else>
				<ul class="list-group">
					<li v-for="(pays,index) in listPays" v-bind:key="index" class="list-group-item lignePays">
						<div v-on:click="clickPays (pays.id)" v-on:mouseover="survolerPays (index)" v-on:mouseout="survolerPays (-1)" v-bind:class="index==indexSurvole ? 'survolerPays' : 'afficherPays'">
							{{ pays.id }}: {{ pays.pays }}
						</div>
		
							<div v-on:click.stop="suppimerPays (pays.id,pays.pays)" v-on:mouseover="survolerPays (index)" v-on:mouseout="survolerPays (-1)" class="btn btn-danger btn-sm boutonX">X</div>
		
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
					<input id="pays" ref="saisiePays" v-model="formData.pays" v-on:input="saisiePaysChange" class="form-control">
				</div>
			</form>
			
			<div v-if="erreurValiderFormulaire!=''">
				<div class="alert alert-danger">
					ERREUR => {{ erreurValiderFormulaire }}
					<div v-on:click="razErreurValiderFormulaire" class="btn btn-danger">OK</div>
				</div>
				
			</div>
			<div v-else-if="messageValiderFormulaire!=''" class="alert alert-danger">
				{{ messageValiderFormulaire }}
			</div>
			<div class="d-flex flex-row-reverse m-3" v-else>
				<div v-on:click.stop="validerFormulaire" class="btn btn-primary">{{ libelleValider }}</div>
			</div>
			
		</div>
		
		<div class="z-index: 1">
			<modale-info message="Veuillez patienter" v-bind:isVisible="modaleInfoIsVisible"></modale-info>
		</div>
		
		<div class="z-index: 2">
			<modale-confirmation ref="modaleConfirmation" message="voulez vous confirmer?"></modale-confirmation>
		</div>
		
		<div class="z-index: 3">
			<tooltip ref="tooltip"></tooltip>
		</div>

	</div>
	
	
</template>

<script>
import axios from 'axios'

import ModaleInfo from '../tools/ModaleInfo'
import ModaleConfirmation from '../tools/ModaleConfirmation'
import Tooltip from '../tools/Tooltip'

export default {
	name: "Pays3",
	data () {
		return {
			erreurChargerPays: "",
			erreurValiderFormulaire: "",
			messageValiderFormulaire: "",
			listPays: [],
			indexSurvole: -1,
			modaleInfoIsVisible: false,
			formData: {
				id: '',
				pays: '',
				
			},
			libelleValider: "Enregistrer"
			
		}
		
	},
	components: {
		'modale-info': ModaleInfo,
		'modale-confirmation': ModaleConfirmation,
		'tooltip': Tooltip
	},
	mounted () {
		
		this.chargerListPays ()
		
	},
	methods: {
		chargerListPays: function () {
			this.erreurChargerPays=""
			
			this.listPays=[]
			axios.get ('http://localhost:8080/api/planificateurvoyage/pays')
			.then (response => {
				
				for (const pays of response.data){
					
					this.listPays.push (pays)
					
				}
				
				
			})
			.catch (exception => {
				console.log (exception)
				
				//this.erreurChargerPays=exception.response.status+":"+exception.response.statusText
				this.erreurChargerPays=exception.message
				
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
			
			
			console.log (this.$refs.saisiePays.value)
			if (this.$refs.saisiePays.value==''){
					
				this.messageValiderFormulaire="renseigner le pays"
				this.$refs.saisiePays.focus()
				setTimeout(() => {  this.messageValiderFormulaire="" }, 1000);
					
			}else{
				this.modaleInfoIsVisible=true
				this.erreurValiderFormulaire=""
			
				axios.post ('http://localhost:8080/api/planificateurvoyage/pays',this.formData)
				.then(response=>{
	
						this.chargerListPays ()
						
						this.formData.id=response.data.id
						this.libelleValider="Modifier"
						this.changeId();
						
						console.log ('le pays '+response.data.pays+' est enregistré')
						
						this.$refs.tooltip.show ('le pays '+response.data.pays+' est enregistré');
						
	
				})
				.catch (exception =>{
					console.log(exception)
					
					this.erreurValiderFormulaire=exception.message
				})
				.finally (() => {
					this.modaleInfoIsVisible=false
				})
			}
		},
		razErreurValiderFormulaire: function () {
			this.erreurValiderFormulaire=""
		},
		changeId:function () {
			
			console.log ("changeId")
			
			if (this.formData.id==''){
				this.libelleValider="Enregistrer"
			}else{
				this.libelleValider="Modifier"
			}
			
		},
		suppimerPays: async function (id, pays) {
			console.log (id+": "+pays)
			
			const resultat=await this.$refs.modaleConfirmation.show ("suppression du pays: "+id+": "+pays)
			
			if (resultat)
			{
				console.log ("suppression du pays: "+id);
				
				axios.delete ('http://localhost:8080/api/planificateurvoyage/pays',{data: {"id":id} })
				.then (response=>{
					console.log ('pays '+response.data.id+' supprimé')
					
					this.chargerListPays ()
					
					this.$refs.tooltip.show ('le pays '+id+": "+response.data.pays+' a été supprimé.');
				})
				.catch (exception=>{
					console.log (exception)
				})
			}

		},
		saisiePaysChange: function () {
			this.formData.pays=this.formData.pays.toUpperCase ()
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
