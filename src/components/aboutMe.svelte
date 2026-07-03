<script lang="ts">
	import TitleBar from './titleBar.svelte';
	import { draggable } from '@neodrag/svelte';
	import './window.css';
</script>

<div
	class="about-me window bg-base-100 absolute flex flex-col items-center justify-center gap-4"
	use:draggable={{ bounds: 'body', handle: '.title-bar' }}
>
	<div class="title-bar w-full">
		<TitleBar />
	</div>
	<div class="avatar avatar-placeholder">
		<div
			class="text-neutral-content ring-primary ring-offset-base-100 w-24 rounded-full bg-orange-400 ring ring-offset-2"
		>
			<span class="text-3xl">PD</span>
		</div>
	</div>
	<div class="content flex flex-col gap-2">
		<div class="title flex flex-col items-center">
			<h2 class="text-3xl">ProDeh</h2>
			<h3 class="text-1xl">Full Stack Developer</h3>
		</div>
		<div class="card bg-base-300 w-96 shadow-sm">
			<div class="card-body">
				<p>I am ProDeh, a 16-year-old coder with over 7 years of experience in programming.</p>
			</div>
		</div>
	</div>
</div>
