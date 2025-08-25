<script lang="ts">
	import { appsList, theme, currentApp } from '$lib/store/store';
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
</div>

<style>
	.desktop {
		height: calc(100vh - 48px);
	}
	.app {
		background-color: var(--base-300);
		backdrop-filter: blur(200px);
	}
	.app:hover {
		opacity: 0.5;
	}
</style>
