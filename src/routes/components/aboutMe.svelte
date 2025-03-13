<script>
	import TitleBar from './titleBar.svelte';
	import { draggable } from '@neodrag/svelte';
</script>

<div
	class="about-me absolute flex flex-col items-center justify-center gap-4 bg-base-100"
	use:draggable={{ bounds: 'body', handle: '.title-bar' }}
>
	<div class="title-bar absolute left-0 top-0 w-full">
		<TitleBar />
	</div>
	<div class="avatar avatar-placeholder">
		<div
			class="w-24 rounded-full bg-orange-400 text-neutral-content ring ring-primary ring-offset-2 ring-offset-base-100"
		>
			<span class="text-3xl">PD</span>
		</div>
	</div>
	<div class="content flex flex-col gap-2">
		<div class="title flex flex-col items-center">
			<h2 class="text-3xl">Produnya Dehingia</h2>
			<h3 class="text-1xl">Full Stack Developer</h3>
		</div>
		<div class="card w-96 bg-base-300 shadow-sm">
			<div class="card-body">
				<p>
					I am Produnya Dehingia, a 15-year-old coder from Assam with over 6 years of experience in
					programming.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.about-me {
		height: 80%;
		width: 70%;
		top: 5%;
		left: 15%;
	}
</style>
