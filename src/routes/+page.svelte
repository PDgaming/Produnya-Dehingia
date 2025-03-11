<script lang="ts">
	import { appsList } from '$lib/store/store';
</script>

<div class="desktop p-2">
	<div class="apps flex flex-col gap-3">
		{#each $appsList as app}
			<a class="app" title={app.name} href={app.route}>
				<div class="flex h-14 w-16 items-center justify-center bg-gray-500 hover:bg-gray-600">
					{@html app.svg}
				</div>
			</a>
		{/each}
	</div>
</div>
