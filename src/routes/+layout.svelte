<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { locked, theme } from '$lib/store/store';
	import LockScreen from './components/lockScreen.svelte';
	import TaskBar from './components/taskBar.svelte';
	import { onMount } from 'svelte';
	import Desktop from './components/Desktop.svelte';

	let { children } = $props();
	const isAppRoute = derived(page, ($page) => {
		if (
			$page.url.pathname.startsWith('/about-me') ||
			$page.url.pathname.startsWith('/projects') ||
			$page.url.pathname.startsWith('/skills') ||
			$page.url.pathname.startsWith('/settings') ||
			$page.url.pathname.startsWith('/contact')
		) {
			return true;
		} else {
			return false;
		}
	});

	onMount(() => {
		// LOCK
		if (!localStorage.getItem('Locked')) {
			localStorage.setItem('Locked', 'true');
			locked.set(true);
		}
		if (localStorage.getItem('Locked') == 'false') {
			locked.set(false);
		}
		// THEME
		const storedTheme = localStorage.getItem('Theme');
		if (storedTheme) {
			theme.set(storedTheme);
		}
		theme.subscribe((value) => {
			document.documentElement.setAttribute('data-theme', value);
		});
	});
</script>

<div class="main-content grid h-screen w-screen border-base-300">
	{#if $locked}
		<LockScreen />
		<div class="fake-window absolute h-full w-full">
			<Desktop />
			<TaskBar />
		</div>
	{:else}
		<div class="window absolute h-full w-full">
			<div class="desktop">
				<Desktop />
			</div>
			{#if $isAppRoute}
				<div class="window">
					{@render children()}
				</div>
			{/if}
		</div>
		<TaskBar />
	{/if}
</div>

<div class="fake-window hidden"></div>

<style>
	.fake-window {
		z-index: -10;
	}
	.window {
		background-image: url('../assets/images/background_image1.jpg');
		background-size: cover;
	}
	.fake-window {
		background-image: url('../assets/images/background_image1.jpg');
		background-size: cover;
	}
</style>
