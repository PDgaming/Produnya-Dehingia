<script>
	import { theme } from '$lib/store/store';
</script>

<label class="flex cursor-pointer gap-2 p-2">
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
