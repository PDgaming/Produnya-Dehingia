<script lang="ts">
	let skills = {
		languages: [
			'HTML',
			'CSS',
			'JavaScript',
			'TypeScript',
			'Python',
			'C',
			'C++',
			'PostgreSQL',
			'Svelte'
		],
		frameworks: ['Svelte Kit', 'Lynx', 'React'],
		toolsAndLibraries: {
			frontEnd: ['Tailwind CSS', 'Bootstrap', 'Daisy UI', 'Threlte', 'Three JS'],
			backEnd: ['Supabase', 'Firebase', 'Neon DB', 'SQL', 'PostgreSQL', 'Docker', 'Auth0', 'groq'],
			platforms: ['Web', 'Android', 'Docker']
		}
	};
</script>

<div class="skills flex flex-col gap-3 p-4">
	<h1 class="text-3xl">My Skills:</h1>
	<div class="programming-languages">
		<div class="card bg-base-200 shadow-sm">
			<div class="card-body">
				<h2 class="card-title">Programming Languages:</h2>

				<div class="languges flex gap-2">
					{#each skills.languages as language}
						<div class="badge badge-outline">{language}</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="frameworks">
		<div class="card bg-base-200 shadow-sm">
			<div class="card-body">
				<h2 class="card-title">Frameworks I have worked with:</h2>
				<div class="frameworks flex gap-2">
					{#each skills.frameworks as framework}
						<div class="badge badge-outline">{framework}</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="tools-and-technologies">
		<div class="card bg-base-200 shadow-sm">
			<div class="card-body">
				<h2 class="card-title">Tools and Libraries I am familiar with:</h2>
				<div class="tools-and-technologies flex flex-col gap-2">
					<div class="front-end-tools flex gap-2">
						{#each skills.toolsAndLibraries.frontEnd as frontEndTools}
							<div class="badge badge-outline">{frontEndTools}</div>
						{/each}
					</div>
					<div class="back-end-tools flex gap-2">
						{#each skills.toolsAndLibraries.backEnd as backEndTools}
							<div class="badge badge-outline">{backEndTools}</div>{/each}
					</div>
					<div class="platform flex gap-2">
						{#each skills.toolsAndLibraries.platforms as platform}
							<div class="badge badge-outline">{platform}</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
