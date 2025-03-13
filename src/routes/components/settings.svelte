<script>
	import { theme } from '$lib/store/store';
	import TitleBar from './titleBar.svelte';
	import { draggable } from '@neodrag/svelte';
</script>

<div
	class="settings absolute w-full bg-base-100"
	use:draggable={{ bounds: 'body', handle: '.title-bar' }}
>
	<div class="title-bar absolute left-0 top-0 w-full">
		<TitleBar />
	</div>
	<div class="window-content mt-8 flex flex-col gap-4 p-4">
		<div class="theme-selector">
			<h2 class="text-2xl">Theme</h2>
			<label class="flex cursor-pointer gap-2">
				<span class="label-text">Corporate</span>
				<input
					type="checkbox"
					value="business"
					class="theme-controller toggle"
					checked={localStorage.getItem('Theme') == 'business'}
					on:change={() => {
						if (localStorage.getItem('Theme')) {
							if (localStorage.getItem('Theme') == 'business') {
								localStorage.setItem('Theme', 'light');
								theme.set('light');
							} else {
								localStorage.setItem('Theme', 'business');
								theme.set('business');
							}
						} else {
							localStorage.setItem('Theme', 'business');
							theme.set('business');
						}
					}}
				/>
				<span class="label-text">Business</span>
			</label>
		</div>
		<div class="background-image">
			<h2 class="text-2xl">Background Image</h2>
		</div>
	</div>
</div>

<style>
	.settings {
		height: 80%;
		width: 70%;
		top: 5%;
		left: 15%;
	}
</style>
