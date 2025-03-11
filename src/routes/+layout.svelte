<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { locked, theme } from '$lib/store/store';
	import LockScreen from './components/lockScreen.svelte';
	import TaskBar from './components/taskBar.svelte';
	import { onMount } from 'svelte';
	import TitleBar from './components/titleBar.svelte';

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
		if (localStorage.getItem('Locked') == 'false') {
			locked.set(false);
		}
		const storedTheme = localStorage.getItem('Theme');
		if (storedTheme) {
			theme.set(storedTheme);
		}
		theme.subscribe((value) => {
			document.documentElement.setAttribute('data-theme', value);
		});
	});
</script>

<div class="main-content grid h-screen w-screen overflow-hidden border-base-300">
	{#if $locked}
		<LockScreen />
	{:else}
		<div class="window h-full w-full overflow-hidden bg-blue-200">
			{#if $isAppRoute}
				<TitleBar />
			{/if}
			{@render children()}
		</div>
		<TaskBar />
	{/if}
</div>
