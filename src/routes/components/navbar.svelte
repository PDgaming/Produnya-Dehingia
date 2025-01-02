<script lang="ts">
	import logo from '../Assets/Image/logo.png';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/>
				</svg>
			</div>
			<ul class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
				<li><a href="/">Home</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#work-experience">Work Experience</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="mailto:produnyadehingia@gmail.com" class="btn">Contact Me</a></li>
			</ul>
		</div>
		<a class="btn btn-ghost text-xl" href="/">
			<div class="logo">
				<img src={logo} alt="Logo" width="40px" />
			</div>
			<div class="logo-text">Produnya Dehingia</div>
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/">Home</a></li>
			<li><a href="#skills">Skills</a></li>
			<li><a href="#work-experience">Work Experience</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="mailto:produnyadehingia@gmail.com">Contact Me</a></li>
		</ul>
	</div>
</div>

<style>
	img {
		border-radius: 100px;
	}
	.navbar {
		position: fixed;
		z-index: 1000;
		background-color: var(--base-300);
		backdrop-filter: blur(30px);
	}
</style>
