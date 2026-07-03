<script lang="ts">
	import TitleBar from './titleBar.svelte';
	import { draggable } from '@neodrag/svelte';
	import './window.css';

	let repos: any[] = [];

	async function loadRepos() {
		try {
			const response = await fetch('https://api.github.com/users/PDgaming/repos');
			const result = await response.json();
			console.log(result);
			repos = result;
		} catch (error) {
			console.error(error);
		}
	}
</script>

<div
	class="repositories window bg-base-100 absolute flex flex-col gap-4"
	use:draggable={{ bounds: 'body', handle: '.title-bar' }}
>
	<div class="title-bar w-full">
		<TitleBar />
	</div>
	<div class="window-content w-full overflow-y-scroll p-4">
		<h1 class="mt-2 text-3xl">Projects I have worked on:</h1>
		{#await loadRepos()}
			<p>Loading repositories...</p>
		{:then}
			<div class="repo mt-2 flex flex-wrap gap-3">
				<div class="card bg-base-300 h-48 w-80 shadow-sm">
					<a class="card-body" href="https://github.com/pd-enterprise/">
						<h2 class="card-title">PD Enterprise</h2>
						<p>A open source project of applications aimed at helping students</p>
					</a>
				</div>
				{#each repos as repo (repo)}
					{#if !repo.private}
						<div class="card bg-base-300 h-48 w-80 shadow-sm">
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
				{/each}
			</div>
		{/await}
	</div>
</div>

<style>
	.repositories {
		height: calc(100vh - 80px);
	}
</style>
