<script lang="ts">
	import { appsList, currentApp } from '$lib/store/store.svelte';
	import { onMount } from 'svelte';

	let date = $state(new Date());
	let dayOrNight = $state('AM');

	let hour: number = $derived(date.getHours());
	let minute = $derived(date.getMinutes());
	let second = $derived(date.getSeconds());

	let today = $derived(date.getDate());
	let month = $derived(date.getMonth());
	let year = $derived(date.getFullYear());

	onMount(() => {
		setInterval(() => {
			date = new Date();
			dayOrNight = hour >= 12 ? 'PM' : 'AM';
		}, 1000);
	});
</script>

<div
	class="task-bar absolute right-0 left-0 z-100 flex h-12 w-full items-center justify-center gap-3 overflow-hidden p-1"
>
	<div class="apps flex gap-3">
		<button
			class="app"
			title="Home"
			onclick={() => {
				currentApp.value = '';
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
		{#each appsList.value as app (app.name)}
			<button
				class="app flex h-10 w-10 items-center justify-center rounded-md"
				title={app.name}
				onclick={() => {
					currentApp.value = app.name;
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
		backdrop-filter: blur(10px);
	}
	.app {
		transition: transform 0.2s ease-in-out;
	}
	.app:hover {
		transform: scale(1.1);
	}
</style>
