<script lang="ts">
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

<div class="repositories bg-base-100 flex h-full w-full flex-col items-center gap-3">
	<h1 class="text-3xl">Projects I have worked on:</h1>
	{#await loadRepos()}
		<p>Loading repositories...</p>
	{:then}
		<div class="project-list flex flex-wrap justify-center gap-3 overflow-y-scroll">
			<div class="card bg-base-300 h-45 w-80 shadow-sm">
				<a class="card-body" href="https://github.com/pd-enterprise/">
					<h2 class="card-title">PD Enterprise</h2>
					<p>A open source project of applications aimed at helping students</p>
				</a>
			</div>
			{#each repos as repo (repo)}
				{#if !repo.private}
					<div class="card bg-base-300 h-45 w-80 shadow-sm">
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
