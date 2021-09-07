<template>
	<div>
		
		<h1>Page 6</h1>
		
		<p>le jour fourni est: {{ jour }}</p>
		
		<div class="d-inline-flex">
			<carte-info class="localCarte m-2">
				<template v-slot:titre>
					<div class="positionTitre">
						<p class="localTitre">{{ jour }}</p>
					</div>
				</template>
				
				<template v-slot:valeur>
					<div class="localValeur">
						<h2>partie 1</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor risus, tempus semper efficitur a, volutpat at sem. Praesent quis erat quis ligula pulvinar sodales. Quisque varius scelerisque turpis quis placerat. Maecenas tempus lectus ut eros molestie iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ut vestibulum nunc, a mattis sapien. Nullam dapibus odio enim, sed pretium nunc aliquam at. Maecenas malesuada justo nisl, vel interdum quam rutrum a. Sed scelerisque arcu eu purus vestibulum, at gravida neque lacinia. Aliquam nulla lorem, facilisis quis elementum et, interdum eget sem. Mauris nec placerat justo.</p>
						<h2>partie 2</h2>
						<p>Vestibulum finibus magna non libero ultricies, efficitur vehicula purus sodales. Vivamus elementum sem et pharetra sodales. Vivamus pharetra sit amet ipsum eu consectetur. Fusce consequat commodo lacus, rhoncus dictum diam pharetra ut. Sed velit massa, pellentesque id lorem porta, malesuada mollis enim. Mauris elementum fringilla mollis. Nunc aliquet tortor eros, quis dignissim augue gravida at. Nunc vulputate consequat nunc ut ultrices. Etiam euismod ipsum eget rhoncus efficitur. Sed convallis vestibulum metus, eget condimentum ligula pellentesque id. Quisque hendrerit turpis congue placerat dictum. Donec congue gravida aliquet.</p>
					
					</div>
				</template>
				
			</carte-info>
	
			<carte-info class="localCarte m-2">
				<template v-slot:titre>
					<div class="positionTitre">
						<p class="localTitre">Autre jour</p>
					</div>
				</template>
				
				<template v-slot:valeur>
					<div class="localValeur">
						<h2>partie 1</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dolor risus, tempus semper efficitur a, volutpat at sem. Praesent quis erat quis ligula pulvinar sodales. Quisque varius scelerisque turpis quis placerat. Maecenas tempus lectus ut eros molestie iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ut vestibulum nunc, a mattis sapien. Nullam dapibus odio enim, sed pretium nunc aliquam at. Maecenas malesuada justo nisl, vel interdum quam rutrum a. Sed scelerisque arcu eu purus vestibulum, at gravida neque lacinia. Aliquam nulla lorem, facilisis quis elementum et, interdum eget sem. Mauris nec placerat justo.</p>
						<h2>partie 2</h2>
						<p>Vestibulum finibus magna non libero ultricies, efficitur vehicula purus sodales. Vivamus elementum sem et pharetra sodales. Vivamus pharetra sit amet ipsum eu consectetur. Fusce consequat commodo lacus, rhoncus dictum diam pharetra ut. Sed velit massa, pellentesque id lorem porta, malesuada mollis enim. Mauris elementum fringilla mollis. Nunc aliquet tortor eros, quis dignissim augue gravida at. Nunc vulputate consequat nunc ut ultrices. Etiam euismod ipsum eget rhoncus efficitur. Sed convallis vestibulum metus, eget condimentum ligula pellentesque id. Quisque hendrerit turpis congue placerat dictum. Donec congue gravida aliquet.</p>
					
					</div>
				</template>
				
			</carte-info>
		</div>
		
	</div>
</template>

<script>
import CarteInfo from './tools/CarteInfo'

export default {
	name: 'Page6',
	data () {
		return {
			jour: ""
		}
	},
	components: {
		"carte-info": CarteInfo
	},
	mounted () {
		this.jour=this.$route.params.jour
	},
	watch: {
		$route: function () {
			this.jour=this.$route.params.jour
		}
	}
	
}
</script>

<style>
.localCarte {
}
.positionTitre {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.localTitre {
	font-size: 20px;
	color: blue;
}

.localValeur{
	width: 500px;
	text-align: justify;
	/* height: inherit; */
	/* overflow: auto; */
}
</style>	