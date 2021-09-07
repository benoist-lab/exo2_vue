<template>
  <div id="app">

	<div class="z-index:0">
	
	<div v-if="textError!=''">{{ textError }}</div>
	
		<header-top></header-top>
	
		<router-view></router-view>
	</div>
	
	<div class="z-index: 999">
		
		<modale-exception ref="modaleException"></modale-exception>
	
	</div>

  </div>
</template>

<script>
import Header from './components/Header'
import {bus} from './main'
import ModaleException from './components/tools/ModaleException'

export default {
	name: 'App',
	data(){
		return {
			textError: ""
			}
		},
	components: {
		'header-top': Header,
		'modale-exception': ModaleException
		},
	created () {
		bus.$on ('error',(data) => {
			this.textError=data
			this.$refs.modaleException.show (data)
			
		})
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*   text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
