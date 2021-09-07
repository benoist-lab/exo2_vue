<template>
	
	<div>
		<h1>Les articles de post</h1>
		<hr/>
		
		<ul>
			<li v-bind:key="index" v-for="(article,index) in allArticles">
				<router-link v-bind:to="`/blogpost/${index}`">
					<div class="card m-2">
						<h3>{{ article.title }}</h3>
					</div>
				</router-link>
			</li>
		</ul>
		
		
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'Page1',
		data () {
			return {
				allArticles: []
			}
		},
		//created () {
		mounted () {
			axios.get('https://jsonplaceholder.typicode.com/posts')
			.then (reponse=> {
				for (const blogpost of reponse.data)
				{
					this.allArticles.push (blogpost);
				}
			})
		}
	}

</script>

<style></style>