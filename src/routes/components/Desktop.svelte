<script lang="ts">
	import { appsList, theme, currentApp } from '$lib/store/store';
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>

<div class="desktop flex p-2">
	<div class="apps flex flex-col gap-3">
		{#each $appsList as app}
			<button
				class="app rounded-md"
				title={app.name}
				on:click={() => {
					currentApp.set(app.name);
				}}
			>
				<div class="flex h-14 w-16 items-center justify-center" id="app">
					{@html $theme == 'light' ? app.svg : app.svg.replaceAll('#000000', '#ffffff')}
				</div>
			</button>
		{/each}
	</div>
	<div class="3D-scene flex flex-col">
		<!-- <div class="threeD-modal">
			<Canvas>
				<Scene />
			</Canvas>
		</div>
		<div class="credit ml-auto">
			<p>
				Credit: <a
					class="link"
					href="https://sketchfab.com/3d-models/low-poly-man-working-at-a-table-with-a-laptop-be6b2404359c474fb0ed148e1882516e"
					>Agor_2012 on Sketchfab</a
				>
			</p>
		</div> -->
	</div>
</div>

<style>
	.desktop {
		height: calc(100vh - 48px);
	}
	/* .threeD-modal {
		width: calc(100vw - 80px);
		height: calc(100vh - 80px);
	} */
	.app {
		background-color: var(--base-300);
		backdrop-filter: blur(100px);
	}
	.app:hover {
		opacity: 0.5;
	}
</style>
