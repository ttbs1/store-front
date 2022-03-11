<template>
	<nav class="bg-light pt-3 pb-2">
		<div class="navbar navbar-light bg-light container">
			<div class="container-fluid">
				<a class="navbar-brand">LOGO</a>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
		<div class="bg-sublight">
			<div class="navbar navbar-expand-lg navbar-light bg-sublight container ps-3">
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
							<NavItem text="Home" href="/"></NavItem>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>Dropdown</a>
								<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<a class="dropdown-item" href="#">Action</a>
									</li>
									<li>
										<a class="dropdown-item" href="#">Another action</a>
									</li>
									<li>
										<hr class="dropdown-divider" />
									</li>
									<li>
										<a class="dropdown-item" href="#">Something else here</a>
									</li>
								</ul>
							</li>
							
							<NavItem text="About" href="/about"></NavItem>
							<NavItem text="FAQs" href="/faqs"></NavItem>
							<NavItem text="Checkout" href="/checkout"></NavItem>
							<NavItem text="Contact" href="/contact"></NavItem>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
	components: {
		NavItem
	}
}
</script>

<style>
.bg-sublight {
	background-color: #f3f3f3;
}
</style>
