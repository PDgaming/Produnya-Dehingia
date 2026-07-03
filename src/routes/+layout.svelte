<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { theme, currentApp, currentBackgroundImage } from '$lib/store/store.svelte';
	import Bar from '../components/bar.svelte';
	import { onMount, type Component } from 'svelte';
	import Desktop from '../components/Desktop.svelte';
	import AboutMe from '../components/aboutMe.svelte';
	import Projects from '../components/projects.svelte';
	import Settings from '../components/settings.svelte';
	import Skills from '../components/skills.svelte';
	import Contact from '../components/contact.svelte';

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

	function removeBgClasses(element: HTMLElement) {
		for (const cls of Array.from(element.classList)) {
			if (cls.startsWith('bg-image')) {
				element.classList.remove(cls);
			}
		}
	}

	onMount(() => {
		const storedTheme = localStorage.getItem('Theme');
		if (storedTheme) {
			theme.value = storedTheme;
		}
		$effect(() => {
			document.documentElement.setAttribute('data-theme', theme.value);
		});
		const storedCurrentApp = localStorage.getItem('currentApp');
		if (storedCurrentApp) {
			currentApp.value = storedCurrentApp;
		}
		$effect(() => {
			localStorage.setItem('currentApp', currentApp.value);
		});
		if (localStorage.getItem('BackgroundImage')) {
			let localBackground = localStorage
				.getItem('BackgroundImage')
				?.replace(/\.(jpg|png|webp)$/, '');

			if (localBackground) {
				const backgroundImageElement = document.getElementById(
					'background-image'
				) as HTMLDivElement;
				if (backgroundImageElement) {
					removeBgClasses(backgroundImageElement);
					currentBackgroundImage.value = localBackground;
				}
			}
		}
		$effect(() => {
			const backgroundImageElement = document.getElementById('background-image') as HTMLDivElement;
			if (backgroundImageElement) {
				removeBgClasses(backgroundImageElement);
				switch (currentBackgroundImage.value) {
					case 'background_image1':
						backgroundImageElement.classList.add('bg-image1');
						break;
					case 'background_image2':
						backgroundImageElement.classList.add('bg-image2');
						break;
					case 'background_image3':
						backgroundImageElement.classList.add('bg-image3');
						break;
					case 'background_image4':
						backgroundImageElement.classList.add('bg-image4');
						break;
					case 'background_image5':
						backgroundImageElement.classList.add('bg-image5');
						break;
				}
			}
		});
	});
</script>

<div class="main-content border-base-300 flex h-screen w-screen overflow-hidden">
	<Bar />
	<div class="background bg-image1 h-full w-full" id="background-image">
		<div class="desktop mt-15">
			<Desktop />
		</div>
		{#if currentApp.value}
			<App />
		{/if}
		{#if $isAppRoute}
			<div class="window">
				{@render children()}
			</div>
		{/if}
	</div>
</div>

<div class="bg-image1 bg-image2 bg-image3 bg-image4 bg-image5 hidden"></div>

<style>
	.background {
		background-size: cover;
	}
	.bg-image1 {
		background-image: url('../assets/images/background_image1.webp');
	}
	.bg-image2 {
		background-image: url('../assets/images/background_image2.webp');
	}
	.bg-image3 {
		background-image: url('../assets/images/background_image3.webp');
	}
	.bg-image4 {
		background-image: url('../assets/images/background_image4.webp');
	}
	.bg-image5 {
		background-image: url('../assets/images/background_image5.webp');
	}
</style>
