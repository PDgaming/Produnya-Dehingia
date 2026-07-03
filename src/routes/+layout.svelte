<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import {
		theme,
		currentApp,
		currentBackgroundImage,
		backgroundImages
	} from '$lib/store/store.svelte';
	import Bar from '../components/bar.svelte';
	import { onMount, type Component } from 'svelte';
	import Desktop from '@components/Desktop.svelte';
	import AboutMe from '@components/apps/aboutMe.svelte';
	import Projects from '@components/apps/projects.svelte';
	import Settings from '@components/apps/settings.svelte';
	import Skills from '@components/apps/skills.svelte';
	import Contact from '@components/apps/contact.svelte';
	import Window from '@components/window.svelte';

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
	const appComponents: Record<string, Component> = {
		'About Me': AboutMe,
		Projects: Projects,
		Settings: Settings,
		Skills: Skills,
		Contact: Contact
	};
	let App = $derived(appComponents[currentApp.value]);
	let bgStyle = $derived(
		`background-image: url(${
			backgroundImages.value.find((b) => b.name.startsWith(currentBackgroundImage.value))?.src
		})`
	);

	onMount(() => {
		// Theme
		const storedTheme = localStorage.getItem('Theme');
		if (storedTheme) {
			theme.value = storedTheme;
		}
		$effect(() => {
			document.documentElement.setAttribute('data-theme', theme.value);
		});

		// Current App
		const storedCurrentApp = localStorage.getItem('currentApp');
		if (storedCurrentApp) {
			currentApp.value = storedCurrentApp;
		}
		$effect(() => {
			localStorage.setItem('currentApp', currentApp.value);
		});

		// Background Image
		if (localStorage.getItem('BackgroundImage')) {
			let localBackground = localStorage
				.getItem('BackgroundImage')
				?.replace(/\.(jpg|png|webp)$/, '');

			if (localBackground) {
				currentBackgroundImage.value = localBackground;
			}
		}
	});
</script>

<div class="main-content border-base-300 flex h-screen w-screen flex-col overflow-hidden">
	<div class="background h-full w-full" id="background-image" style={bgStyle}>
		<div class="desktop mt-15">
			<Desktop />
		</div>
		{#if currentApp.value}
			<Window>
				<App />
			</Window>
		{/if}
		{#if $isAppRoute}
			<div class="window">
				{@render children()}
			</div>
		{/if}
	</div>
	<Bar />
</div>

<style>
	.background {
		background-size: cover;
	}
</style>
