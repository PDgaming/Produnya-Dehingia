<script>
	import TitleBar from '../components/titleBar.svelte';
	import { draggable } from '@neodrag/svelte';
</script>

<div
	class="contact absolute flex w-full flex-col gap-2 bg-base-100"
	use:draggable={{ bounds: 'body', handle: '.title-bar' }}
>
	<div class="title-bar absolute left-0 top-0 w-full"><TitleBar /></div>
	<div class="window-content p-4">
		<h1 class="mt-6 text-4xl">Contact Me:</h1>
		<div class="email">
			<p>
				Send an Email: <a class="link" href="produnyadehingia@gmail.com"
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

<style>
	.contact {
		height: 80%;
		width: 70%;
		top: 5%;
		left: 15%;
	}
</style>
