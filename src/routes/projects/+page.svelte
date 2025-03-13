<script lang="ts">
	import { onMount } from 'svelte';
	import TitleBar from '../components/titleBar.svelte';
	import { draggable } from '@neodrag/svelte';

	let repos: any[] = [];

	onMount(async () => {
		const response = await fetch('https://api.github.com/users/PDgaming/repos');
		const result = await response.json();
		repos = result;
	});
</script>

<div
	class="repositories absolute flex flex-col gap-4 overflow-y-scroll bg-base-100 p-4"
	use:draggable={{ bounds: 'body', handle: '.title-bar' }}
>
	<div class="title-bar absolute left-0 top-0 w-full">
		<TitleBar />
	</div>
	<h1 class="mt-6 text-3xl">Projects I have worked on:</h1>
	{#if repos.length > 0}
		<div class="repo flex flex-wrap gap-3">
			{#each repos as repo}
				{#if !repo.private}
					{#if !repo.archived}
						<div class="card w-96 bg-base-200 shadow-sm">
							<a class="card-body" href={repo.html_url}>
								<h2 class="card-title">{repo.name}</h2>
								<p>
									{repo.description}
								</p>
								{#if repo.language}
									<div class="card-actions justify-end">
										<div class="badge badge-outline">{repo.language}</div>
									</div>
								{/if}
							</a>
						</div>
					{:else}
						<div class="card w-96 bg-red-400 shadow-sm">
							<a class="card-body" href={repo.html_url}>
								<h2 class="card-title">{repo.name}</h2>
								<p>
									{repo.description}
								</p>
								{#if repo.language}
									<div class="card-actions justify-end">
										<div class="badge badge-outline">{repo.language}</div>
									</div>
								{/if}
							</a>
						</div>
					{/if}
				{/if}
			{/each}
		</div>
	{:else}
		<p>Loading repositories...</p>
	{/if}
</div>

<style>
	.repositories {
		height: calc(100vh - 80px);
	}
	.repositories {
		height: 80%;
		width: 70%;
		top: 5%;
		left: 15%;
	}
</style>
