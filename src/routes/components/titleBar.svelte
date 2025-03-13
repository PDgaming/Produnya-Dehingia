<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { appsList } from '$lib/store/store';

	let name: string = '';
	let icon: string = '';

	const pathName = derived(page, ($page) => {
		return $page.url.pathname.replace('/', '');
	});

	pathName.subscribe((value) => {
		name = value
			.replace('-', ' ')
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');

		for (let i = 0; i < $appsList.length; i++) {
			if ($appsList[i].name == name) {
				icon = $appsList[i].svg;
			}
		}
	});
</script>

<button
	class="title-bar absolute top-0 z-50 flex h-auto w-full cursor-move flex-row bg-base-300"
	id="window"
>
	<div class="content flex gap-2 p-1">
		<div class="icon">{@html icon}</div>
		<div class="title">
			<h1 class="text-xl">
				{name}
			</h1>
		</div>
	</div>
	<div class="control-window ml-auto flex h-10 items-center gap-5">
		<a
			class="close-window flex h-full w-10 items-center justify-center hover:bg-red-600"
			aria-label="Close Window"
			title="Close Window"
			href="/"
		>
			<svg
				width="30px"
				height="30px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
					fill="#6B7280"
				/>
			</svg>
		</a>
	</div>
</button>
