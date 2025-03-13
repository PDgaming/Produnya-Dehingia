<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { locked, theme, currentApp, currentBackgroundImage } from '$lib/store/store';
	import LockScreen from './components/lockScreen.svelte';
	import TaskBar from './components/taskBar.svelte';
	import { onMount } from 'svelte';
	import Desktop from './components/Desktop.svelte';
	import AboutMe from './components/aboutMe.svelte';
	import Projects from './components/projects.svelte';
	import Settings from './components/settings.svelte';
	import Skills from './components/skills.svelte';
	import Contact from './components/contact.svelte';

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
		const storedCurrentApp = localStorage.getItem('currentApp');
		if (storedCurrentApp) {
			currentApp.set(storedCurrentApp);
		}
		currentApp.subscribe((value) => {
			localStorage.setItem('currentApp', value);
		});
		currentBackgroundImage.subscribe((value) => {
			console.log(value);
			const backgroundImageElement = document.getElementById('background-image') as HTMLDivElement;
			if (backgroundImageElement) {
				let currentBackgroundImageClass: string;

				for (let i = 0; i < backgroundImageElement.classList.length; i++) {
					console.log(backgroundImageElement.classList[i].startsWith('bg-image'));
					if (backgroundImageElement.classList[i].startsWith('bg-image')) {
						currentBackgroundImageClass = backgroundImageElement.classList[i];
						console.log(currentBackgroundImageClass);
						break;
					}
				}
				switch (value) {
					case 'background_image1':
						// @ts-expect-error
						backgroundImageElement.classList.remove(currentBackgroundImageClass);
						backgroundImageElement.classList.add('bg-image1');
						break;
					case 'background_image2':
						// @ts-expect-error
						backgroundImageElement.classList.remove(currentBackgroundImageClass);
						backgroundImageElement.classList.add('bg-image2');
						break;
					case 'background_image3':
						// @ts-expect-error
						backgroundImageElement.classList.remove(currentBackgroundImageClass);
						backgroundImageElement.classList.add('bg-image3');
						break;
					case 'background_image4':
						// @ts-expect-error
						backgroundImageElement.classList.remove(currentBackgroundImageClass);
						backgroundImageElement.classList.add('bg-image4');
						break;
					case 'background_image5':
						// @ts-expect-error
						backgroundImageElement.classList.remove(currentBackgroundImageClass);
						backgroundImageElement.classList.add('bg-image5');
						break;
				}
			}
		});
	});
</script>

<div class="main-content grid h-screen w-screen border-base-300">
	{#if $locked}
		<LockScreen />
		<div class="fake-window bg-image1 absolute h-full w-full" id="background-image">
			<div class="desktop">
				<Desktop />
			</div>
			{#if $currentApp && $currentApp != ''}
				{#if $currentApp == 'About Me'}
					<AboutMe />
				{:else if $currentApp == 'Projects'}
					<Projects />
				{:else if $currentApp == 'Settings'}
					<Settings />
				{:else if $currentApp == 'Skills'}
					<Skills />
				{:else if $currentApp == 'Contact'}
					<Contact />
				{/if}
			{/if}
			{#if $isAppRoute}
				<div class="window">
					{@render children()}
				</div>
			{/if}
		</div>
	{:else}
		<div class="window bg-image1 absolute h-full w-full" id="background-image">
			<div class="desktop">
				<Desktop />
			</div>
			{#if $currentApp && $currentApp != ''}
				{#if $currentApp == 'About Me'}
					<AboutMe />
				{:else if $currentApp == 'Projects'}
					<Projects />
				{:else if $currentApp == 'Settings'}
					<Settings />
				{:else if $currentApp == 'Skills'}
					<Skills />
				{:else if $currentApp == 'Contact'}
					<Contact />
				{/if}
			{/if}
			{#if $isAppRoute}
				<div class="window">
					{@render children()}
				</div>
			{/if}
		</div>
		<TaskBar />
	{/if}
</div>

<div class="fake-window bg-image1 bg-image2 bg-image3 bg-image4 bg-image5 hidden"></div>

<style>
	.fake-window {
		z-index: -10;
	}
	.window {
		background-size: cover;
	}
	.fake-window {
		background-size: cover;
	}
	.bg-image1 {
		background-image: url('../assets/images/background_image1.jpg');
	}
	.bg-image2 {
		background-image: url('../assets/images/background_image2.png');
	}
	.bg-image3 {
		background-image: url('../assets/images/background_image3.jpg');
	}
	.bg-image4 {
		background-image: url('../assets/images/background_image4.jpg');
	}
	.bg-image5 {
		background-image: url('../assets/images/background_image5.webp');
	}
</style>
