<template>
	<div>
	
<!-- 	
		<ul class="nav">
			<li class="btn btn-primary btn-nav"><router-link to='/' exact>Accueil</router-link></li>
			<li class="btn btn-primary btn-nav"><router-link to='/page1'>Page1</router-link></li>
			<li class="btn btn-primary btn-nav"><router-link to='/page2'>Page2</router-link></li>
			<li class="btn btn-primary btn-nav"><router-link to='/page3'>Page3</router-link></li>
			<li class="btn btn-primary btn-nav"><router-link to='/page4'>Page4</router-link></li>
			
			<li class="btn btn-primary btn-nav"><router-link to='/page5/truc'>Page5->truc</router-link></li>
			<li class="btn btn-primary btn-nav"><router-link to='/page5/machin'>Page5->machin</router-link></li>
			<li class="btn btn-primary btn-nav"><router-link to='/page6/lundi'>Page6->lundi</router-link></li>
			<li class="btn btn-primary btn-nav"><router-link to='/page6/vendredi'>Page6->vendredi</router-link></li>
			
			<li class="btn btn-primary btn-nav"><router-link to='/pays'>Pays</router-link></li>
			<li class="btn btn-primary btn-nav"><router-link to='/pays2'>Pays 2</router-link></li>
			<li class="btn btn-primary btn-nav"><router-link to='/pays3'>Pays 3</router-link></li>
		
		</ul>
-->
		<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
		
			<ul class="navbar-nav">
				<li class="nav-item"><router-link to='/' exact class="nav-link">Accueil</router-link></li>
				<li class="nav-item"><router-link to='/page1' class="nav-link">Page1</router-link></li>
				<li class="nav-item"><router-link to='/page2' class="nav-link">Page2</router-link></li>
				<li class="nav-item"><router-link to='/page3' class="nav-link">Page3</router-link></li>
				<li class="nav-item"><router-link to='/page4' class="nav-link">Page4</router-link></li>
				
				<!-- 
				<li class="nav-item"><router-link to='/page5/truc' class="nav-link">Page5->truc</router-link></li>
				<li class="nav-item"><router-link to='/page5/machin' class="nav-link">Page5->machin</router-link></li>
				-->
				<!-- Dropdown Page 5-->
				<li class="nav-item">
					<div class="nav-link dropdown">
						Page 5
						<div class="dropdown-content m-0 p-0">
							<li class="bg-primary"><nobr><router-link to='/page5/truc' class="nav-link sousMenu">Page5: truc</router-link></nobr></li>
							<li class="bg-primary"><nobr><router-link to='/page5/machin' class="nav-link">Page5: machin</router-link></nobr></li>
						</div>
					</div>
				</li>

<!-- 
				<li class="nav-item"><router-link to='/page6/lundi' class="nav-link">Page6->lundi</router-link></li>
				<li class="nav-item"><router-link to='/page6/vendredi' class="nav-link">Page6->vendredi</router-link></li>
 -->				
				<!-- Dropdown Page 6-->
				<li class="nav-item">
					<div class="nav-link dropdown">
						Page 6
						<div class="dropdown-content m-0 p-0">
							<li class="bg-primary"><nobr><router-link to='/page6/Lundi' class="nav-link sousMenu">Page6: Lundi</router-link></nobr></li>
							<li class="bg-primary"><nobr><router-link to='/page6/Vendredi' class="nav-link">Page6: Vendredi</router-link></nobr></li>
						</div>
					</div>
				</li>

				<li class="nav-item"><router-link to='/page7' class="nav-link">Page7</router-link></li>
				<li class="nav-item"><router-link to='/page8' class="nav-link">Page8</router-link></li>

				<!-- PAYS -->
				<li class="nav-item"><router-link to='/pays' class="nav-link">Pays</router-link></li>
				<li class="nav-item"><router-link to='/pays2' class="nav-link">Pays 2</router-link></li>
				<li class="nav-item"><router-link to='/pays3' class="nav-link">Pays 3</router-link></li>
			
			</ul>
		</nav>

	</div>

</template>

<script>
	export default {
	name: 'Header'
		
		
		
	}
</script>

<style>
/* 	.router-link-active {
		color: red;
	} */
	.btn-nav{
		margin: 5px;
	}
	.btn-nav a {
		color: #fff;
	}
	.btn-nav a:hover {
		color: #fff;
	}


.sousMenu{

}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}


</style>