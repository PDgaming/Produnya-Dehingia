<script lang="ts">
	import { appsList } from '$lib/store/store';
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
</script>

<div class="desktop flex p-2">
	<div class="apps flex flex-col gap-3">
		{#each $appsList as app}
			<a class="app" title={app.name} href={app.route}>
				<div
					class="flex h-14 w-16 items-center justify-center bg-gray-400 hover:bg-gray-500"
					id="app"
				>
					{@html app.svg}
				</div>
			</a>
		{/each}
	</div>
	<div class="3D-scene flex flex-col">
		<div class="threeD-modal w-auto">
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
		</div>
	</div>
</div>

<style>
	.desktop {
		height: calc(100vh - 48px);
	}
	.threeD-modal {
		height: calc(100vh - 80px);
	}
</style>
