<script lang="ts">
	import { goto } from '$app/navigation';
	import { appsList, currentApp, locked, showStartMenu, theme } from '$lib/store/store';
	import { writable } from 'svelte/store';

	let powerMenu = writable(false);
</script>

<div class="start-menu rounded-md bg-base-100">
	<div class="pinned-section flex flex-col gap-3 p-4">
		<h2 class="text-2xl">Pinned</h2>
		<div class="apps flex flex-row flex-wrap gap-3">
			{#each $appsList as app}
				<button
					class="app btn btn-ghost h-14 w-16"
					title={app.name}
					on:click={() => {
						showStartMenu.set(false);
						currentApp.set(app.name);
					}}
				>
					<div class="flex items-center justify-center" id="app">
						{@html $theme == 'light' ? app.svg : app.svg.replaceAll('#000000', '#ffffff')}
					</div>
				</button>
			{/each}
		</div>
	</div>
	{#if $powerMenu}
		<div class="power-menu absolute right-0 h-10 rounded-md bg-base-100">
			<button
				class="btn btn-ghost flex gap-2 p-2"
				on:click={() => {
					currentApp.set('');
					powerMenu.set(false);
					showStartMenu.set(false);
					localStorage.setItem('Locked', 'true');
					locked.set(true);
				}}
			>
				<svg
					fill="gray"
					width="25px"
					height="25px"
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M1.3 3.75h5.88V2.5H1.3A1.25 1.25 0 0 0 .05 3.75v8.5A1.25 1.25 0 0 0 1.3 13.5h5.88v-1.25H1.3z"
					/><path
						d="m15.4 7-4-2.74-.71 1 3.08 2.1H4.71v1.26h9.07l-3.08 2.11.71 1L15.4 9a1.24 1.24 0 0 0 0-2z"
					/></svg
				>
				Log Out
			</button>
		</div>
	{/if}
	<div class="bottom-bar flex h-16 items-center bg-base-100">
		<button
			aria-label="Power Button"
			class="power-options absolute right-0 p-2"
			title="Power Button"
			on:click={() => {
				if (!$powerMenu) {
					powerMenu.set(true);
				} else {
					powerMenu.set(false);
				}
			}}
		>
			<svg
				width="30px"
				height="30px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V3ZM8.6092 5.8744C9.09211 5.60643 9.26636 4.99771 8.99839 4.5148C8.73042 4.03188 8.12171 3.85763 7.63879 4.1256C4.87453 5.65948 3 8.61014 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.66747 19.1882 5.75928 16.5007 4.20465C16.0227 3.92811 15.4109 4.09147 15.1344 4.56953C14.8579 5.04759 15.0212 5.65932 15.4993 5.93586C17.5942 7.14771 19 9.41027 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 9.3658 6.45462 7.06997 8.6092 5.8744Z"
					fill="gray"
				/>
			</svg>
		</button>
	</div>
</div>

<style>
	.app {
		border: 1px solid black;
	}
	.start-menu {
		height: calc(100vh - 600px);
		width: 30rem;
		background-color: var(--base-100);
		backdrop-filter: blur(150px);
	}
	.pinned-section {
		height: calc(100% - 64px);
	}
	.power-menu {
		bottom: 67px;
	}
</style>
