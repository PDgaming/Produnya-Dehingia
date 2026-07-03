<script lang="ts">
	import TitleBar from './titleBar.svelte';
	import { draggable } from '@neodrag/svelte';
	import './window.css';
</script>

<div
	class="contact window bg-base-100 absolute flex w-full flex-col gap-2"
	use:draggable={{ bounds: 'body', handle: '.title-bar' }}
>
	<div class="title-bar absolute top-0 left-0 w-full"><TitleBar /></div>
	<div class="window-content p-4">
		<h1 class="mt-6 text-4xl">Contact Me:</h1>
		<div class="email">
			<p>
				Send an Email: <a class="link" href="mailto:produnyadehingia@gmail.com"
					>produnyadehingia@gmail.com</a
				>
			</p>
		</div>
		<div class="github">
			<p>
				Check out my github: <a class="link" href="https://github.com/PDgaming"
					>https://github.com/PDgaming</a
				>
			</p>
		</div>
		<div class="linkedin">
			<p>
				Connect with linkedin: <a class="link" href="https://www.linkedin.com/in/produnya-dehingia"
					>https://www.linkedin.com/in/produnya-dehingia</a
				>
			</p>
		</div>
	</div>
</div>
