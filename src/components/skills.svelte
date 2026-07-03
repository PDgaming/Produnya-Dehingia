<script lang="ts">
	import TitleBar from './titleBar.svelte';
	import { draggable } from '@neodrag/svelte';
	import './window.css';
	import { frameworks, languages, platforms } from '$lib/data/skills';
</script>

<div
	class="skills window bg-base-100 absolute flex flex-col gap-3"
	use:draggable={{ bounds: 'body', handle: '.title-bar' }}
>
	<div class="title-bar w-full">
		<TitleBar />
	</div>
	<div class="window-content mt-3 overflow-y-scroll p-4">
		<h1 class="text-3xl">My Skills:</h1>
		<div class="skils mt-2 flex gap-4">
			<!-- programming-languages -->
			<div class="card bg-base-200 shadow-sm">
				<div class="card-body">
					<h2 class="card-title">Programming Languages:</h2>
					<div class="languges flex flex-wrap gap-2">
						{#each languages as language (language.name)}
							<div class="language flex gap-2">
								<div class="icon">
									{@html language.svg}
								</div>
								<div class="content flex flex-col gap-2">
									<div class="badge badge-outline">{language.name}</div>
									<progress class="progress w-49" value={language.value} max="100"></progress>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<!-- Frameworks -->
			<div class="card bg-base-200 shadow-sm">
				<div class="card-body">
					<h2 class="card-title">Frameworks I have worked with:</h2>
					<div class="frameworks flex flex-wrap gap-2">
						{#each frameworks as framework (framework.name)}
							<div class="framework flex gap-2">
								<div class="icon">{@html framework.svg}</div>
								<div class="content flex flex-col gap-2">
									<div class="badge badge-outline">{framework.name}</div>
									<progress class="progress w-49" value={framework.value} max="100"></progress>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<!-- Platforms -->
			<div class="card bg-base-200 w-80 shadow-sm">
				<div class="card-body">
					<h2 class="card-title">Platforms I have worked with:</h2>
					<div class="tools flex flex-wrap gap-2">
						{#each platforms as platform (platform.name)}
							<div class="platform flex gap-2">
								<div class="icon">{@html platform.svg}</div>
								<div class="content flex flex-col gap-2">
									<div class="badge badge-outline">{platform.name}</div>
									<progress class="progress w-56" value={platform.value} max="100"></progress>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
