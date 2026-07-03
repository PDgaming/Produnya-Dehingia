<script lang="ts">
	import { theme, currentBackgroundImage, backgroundImages } from '$lib/store/store.svelte';
	import TitleBar from './titleBar.svelte';
	import { draggable } from '@neodrag/svelte';
	import './window.css';
</script>

<div
	class="settings window bg-base-100 absolute w-full"
	use:draggable={{ bounds: 'body', handle: '.title-bar' }}
>
	<div class="title-bar absolute top-0 left-0 w-full">
		<TitleBar />
	</div>
	<div class="window-content mt-8 flex flex-col gap-4 overflow-y-scroll p-4">
		<div class="theme-selector">
			<h2 class="text-2xl">Theme</h2>
			<label class="flex cursor-pointer gap-2">
				<span class="label-text">Corporate</span>
				<input
					type="checkbox"
					value="business"
					class="theme-controller toggle"
					checked={localStorage.getItem('Theme') == 'business'}
					onchange={() => {
						if (localStorage.getItem('Theme')) {
							if (localStorage.getItem('Theme') == 'business') {
								localStorage.setItem('Theme', 'light');
								theme.value = 'light';
							} else {
								localStorage.setItem('Theme', 'business');
								theme.value = 'business';
							}
						} else {
							localStorage.setItem('Theme', 'business');
							theme.value = 'business';
						}
					}}
				/>
				<span class="label-text">Business</span>
			</label>
		</div>
		<div class="background-image">
			<h2 class="text-2xl">Background Image</h2>
			<div class="all-images flex flex-row flex-wrap gap-5 p-2">
				{#each backgroundImages.value as backgroundImage (backgroundImage.name)}
					<div class="image-option flex flex-col items-center justify-center gap-2">
						{#if backgroundImage.name == currentBackgroundImage.value}
							<button class="rounded-2xl border-4 border-slate-300">
								<img
									src={backgroundImage.src}
									alt={backgroundImage.name.split('.')[0]}
									class="h-36 w-36 rounded-xl border-2"
									id={backgroundImage.name.split('.')[0]}
								/>
							</button>
						{:else}
							<button
								onclick={() => {
									currentBackgroundImage.value = backgroundImage.name.split('.')[0];
									localStorage.setItem('BackgroundImage', backgroundImage.name);
								}}
							>
								<img
									src={backgroundImage.src}
									alt={backgroundImage.name.split('.')[0]}
									class="h-36 w-36 rounded-xl border-2"
									id={backgroundImage.name.split('.')[0]}
								/>
							</button>
						{/if}
						<p class="text-xl">
							{backgroundImage.name.split('.')[0]}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.window-content {
		height: 90%;
	}
	.image-option:hover {
		transform: scale(1.05);
	}
</style>
