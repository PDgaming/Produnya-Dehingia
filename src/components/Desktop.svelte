<script lang="ts">
	import Navbar from '@components/navbar.svelte';
	import { appsList, currentApp } from '$lib/store/store.svelte';
</script>

<div class="desktop flex p-2">
	<div class="apps flex flex-col gap-3">
		{#each appsList.value as app (app.name)}
			<button
				class="app bg-base-100 rounded-md"
				title={app.name}
				onclick={() => {
					currentApp.value = app.name;
				}}
			>
				<div class="flex h-14 w-16 items-center justify-center" id="app">
					{@html app.svg}
				</div>
			</button>
		{/each}
	</div>

	<Navbar />
</div>
