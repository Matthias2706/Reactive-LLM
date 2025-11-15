<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import LoadingSpinner from './LoadingSpinner.svelte';

	export interface ButtonProps {
		children: Snippet;
		onclick?: () => void;
		customClass?: string;
		isLoading?: boolean;
	}
</script>

<script lang="ts">
	let { children, isLoading = false, customClass, ...props }: ButtonProps = $props();
</script>

<button class="cursor-pointer {customClass ?? ''}" {...props} disabled={isLoading}>
	{#if isLoading}
		<LoadingSpinner class="size-4"></LoadingSpinner>
		<p>Loading...</p>
	{:else}
		{@render children()}
	{/if}
</button>
