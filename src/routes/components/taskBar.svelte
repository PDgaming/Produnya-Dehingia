<script lang="ts">
	import { appsList } from '$lib/store/store';
	import { writable } from 'svelte/store';
	import StartMenu from './startMenu.svelte';

	let showStartMenu = writable<boolean>(true);
</script>

{#if $showStartMenu}
	<div class="start-menu absolute bottom-0 z-10 mb-12 flex w-full justify-center">
		<StartMenu />
	</div>
{/if}

<div
	class="task-bar absolute bottom-0 left-0 right-0 flex h-12 w-full justify-center gap-3 overflow-hidden bg-base-300 p-1"
>
	<button
		class="aria-label='Start Menu' flex h-full w-10 items-center justify-center bg-blue-400"
		aria-label="Start Menu"
		title="Start Menu"
		on:click={() => {
			if (!$showStartMenu) {
				showStartMenu.set(true);
			} else {
				showStartMenu.set(false);
			}
		}}
	>
		<div class="vertical-line absolute h-10 w-1 bg-gray-900"></div>
		<div class="horizontal-line h-1 w-full bg-gray-900"></div>
	</button>
	<div class="apps flex gap-3">
		<a class="app" title="Home" href="/" aria-label="Home">
			<div class="flex h-full w-10 items-center justify-center bg-gray-200">
				<svg
					width="30px"
					height="30px"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
						fill="#000000"
					/>
				</svg>
			</div>
		</a>
		{#each $appsList as app}
			<a class="app" title={app.name} href={app.route}>
				<div
					class="flex h-full w-10 items-center justify-center"
					style="background-color: {app.iconColor}"
				>
					{@html app.svg}
				</div>
			</a>
		{/each}
	</div>
	<div class="system-tray"></div>
</div>
