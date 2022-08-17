<template>
	<nav class="pt-3">
		<div class="navbar navbar-light container">
			<div class="container-fluid">
				<a class="navbar-brand">LOGO</a>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
					<font-awesome-icon icon="fa-solid fa-cart-shopping" class="btn btn-lg btn-outline-warning mx-2"/>
				</form>
			</div>
		</div>
		<div class="bg-sublight">
			<div class="navbar navbar-expand-lg navbar-light bg-sublight container ps-3 py-0">
				<div class="container-fluid d-flex justify-content-end">
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item" >
								<div class="" style="background-color: #ffd202; width: 18em; height: 100%;">
									<a href="/" class="btn" type="button" aria-expanded="false" style="width: 100%; display: flex; justify-content: space-between;">
										<span>Categories</span> 
										<span><font-awesome-icon icon="fa-solid fa-bars" /></span>
									</a>
								</div>
							</li>
							<li class="nav-item">
								<a class="nav-link active ps-3" aria-current="page" href="/">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active ps-3" aria-current="page" href="about">About</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active ps-3" aria-current="page" href="faqs">FAQs</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active ps-3" aria-current="page" href="checkout">Checkout</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active ps-3" aria-current="page" href="contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
</script>

<style>
.bg-sublight {
	background-color: #e4e4e4;
}
</style>
