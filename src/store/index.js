import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		todos: [
			{ id: 1, text: '...', done: true },
			{ id: 2, text: '...', done: false }
		]
	},
	getters: {
		getCentiemeCount: state => {
			return state.count/100
		},
		getTodoById: (state) => (id) => {
			return state.todos.find(todo => todo.id === id)
			}
	},
	mutations: {	//SYNCHRONE OBLIGATOIREMENT
		increment (state) {
			state.count++
		},
		addCounter (state,v){
			state.count+=v
		}
	
	},
	actions: {		//ASYNCHORNE
		incrementDiffere ({ commit }) {
			setTimeout (()=>commit ("increment"),1000)
		}
	}
	

})