<script lang="ts">
	import { appsList, currentApp, showStartMenu } from '$lib/store/store';
	import StartMenu from './startMenu.svelte';
	import { onMount } from 'svelte';

	let date = new Date();
	let dayOrNight = 'AM';

	$: hour = date.getHours();
	$: minute = date.getMinutes();
	$: second = date.getSeconds();

	$: today = date.getDate();
	$: month = date.getMonth();
	$: year = date.getFullYear();

	onMount(() => {
		const interval = setInterval(() => {
			date = new Date();
			dayOrNight = hour >= 12 ? 'PM' : 'AM';
		}, 1000);
	});
</script>

{#if $showStartMenu}
	<div class="start-menu absolute bottom-0 z-10 mb-12 flex w-full justify-center">
		<StartMenu />
	</div>
{/if}

<div
	class="task-bar absolute bottom-0 left-0 right-0 flex h-12 w-full items-center justify-center gap-3 overflow-hidden p-1"
>
	<button
		class="aria-label='Start Menu' rounded-sl flex h-full w-10 items-center justify-center bg-blue-400"
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
		<button
			class="app"
			title="Home"
			on:click={() => {
				currentApp.set('');
			}}
			aria-label="Home"
		>
			<div class="flex h-full w-10 items-center justify-center rounded-md bg-gray-200">
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
		</button>
		{#each $appsList as app}
			<button
				class="app flex h-10 w-10 items-center justify-center rounded-md"
				title={app.name}
				on:click={() => {
					currentApp.set(app.name);
				}}
				aria-label={app.name}
				style="background-color: {app.iconColor}"
			>
				{@html app.svg}
			</button>
		{/each}
	</div>
	<div class="system-tray absolute right-0 p-4">
		<div class="clock flex flex-col items-center justify-center">
			<div class="time">
				<p>{hour % 12 || 12}:{minute}:{second} {dayOrNight}</p>
			</div>
			<div class="date">
				<p>{today}/{month}/{year}</p>
			</div>
		</div>
	</div>
</div>

<style>
	.task-bar {
		background-color: var(--base-300);
		backdrop-filter: blur(200px);
	}
	.app {
		transition: transform 0.2s ease-in-out;
	}
	.app:hover {
		transform: scale(1.1);
	}
</style>
