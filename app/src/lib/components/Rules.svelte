<script lang="ts" module>
	import Button from './Button.svelte';
	import SVGRemove from '$assets/svgs/remove.svg';
	import { slide } from 'svelte/transition';

	export interface RulesProps {
		rules: Rule[];
		onRemove?: (rule: Rule) => {};
	}
</script>

<script lang="ts">
	let { ...props }: RulesProps = $props();
	let edit = $state(-1);
</script>

<div class="max-w-[20rem] min-w-[20rem] overflow-hidden rounded-md border border-gray-300">
	<div class="bg-blue-100 p-2">Rules</div>
	<ul class="space-y-2 p-3">
		{#each props.rules as rule}
			<li class="w-full min-w-0">
				<div class="flex w-full min-w-0 items-center justify-between">
					<button
						class="min-w-0 flex-1 pr-4 text-left"
						onclick={() => (edit = edit === rule.key ? -1 : rule.key)}
					>
						<p class="truncate">{rule.shortName}</p>
					</button>
					<Button onclick={() => props.onRemove?.(rule)}>
						<img src={SVGRemove} alt="Remove" class="size-4" />
					</Button>
				</div>

				{#if edit === rule.key}
					<div transition:slide class="w-full max-w-full min-w-0 break-words whitespace-normal">
						<textarea class="h-20 w-full rounded-md border border-gray-400 p-2 text-sm"
							>{rule.rule}</textarea
						>
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</div>
