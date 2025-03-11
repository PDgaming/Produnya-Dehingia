<script lang="ts">
	import { goto } from '$app/navigation';
	import { locked } from '$lib/store/store';

	const password = 'Hello World';
	let error = '';

	function login() {
		const inputElement = document.getElementById('password') as HTMLInputElement;
		const userInput = inputElement.value.trim();

		if (userInput == password) {
			locked.set(false);
			localStorage.setItem('Locked', 'false');
		} else {
			error = 'Invalid Password';
		}
	}
</script>

<div class="lock-screen flex flex-col items-center justify-center bg-gray-700">
	<div class="profile">
		<div class="avatar">
			<div class="w-40 rounded-full bg-gray-400">
				<svg
					fill="#000000"
					width="100px"
					height="100px"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
					class="flex h-40 w-40 items-center justify-center"
					><path
						d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"
					/></svg
				>
			</div>
		</div>
	</div>
	<div class="password-field">
		<form class="card-body">
			<fieldset class="fieldset">
				<p class="text-sm text-gray-400">Password: {password}</p>
				<input
					type="password"
					id="password"
					class="input rounded-md"
					placeholder="Password"
					required
				/>
				{#if error}
					<p class="text-red-600">{error}</p>
				{/if}
				<center>
					<button class="btn btn-neutral mt-4 rounded-md" on:click={login}>Enter</button>
				</center>
			</fieldset>
		</form>
	</div>
	<div class="accesibility"></div>
</div>
