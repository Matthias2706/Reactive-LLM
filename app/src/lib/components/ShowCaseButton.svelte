<script lang="ts" module>
	import Button from './Button.svelte';
	import SVGMindMap from '$assets/svgs/minmap.svelte';
	import SVGVocabulary from '$assets/svgs/vocabulary.svelte';
	import SVGEstimate from '$assets/svgs/estimate.svelte';
	import SVGCalendar from '$assets/svgs/calendar.svelte';
	import type { Component } from 'svelte';

	type Variant = 'Mindmap' | 'Calendar' | 'Vocabulary' | 'Estimate';

	export interface LabelType {
		labelText: string;
		svg: Component;
	}

	interface ShowCaseButtonProps {
		variant: Variant;
		classnames?: string;
		onclick?: () => void;
		label: string;
	}
</script>

<script lang="ts">
	let { variant, onclick, classnames, label, ...props }: ShowCaseButtonProps = $props();

	const variants: Record<string, LabelType> = {
		Mindmap: { labelText: 'Brainstorming', svg: SVGMindMap },
		Vocabulary: { labelText: 'Learn Vocabs', svg: SVGVocabulary },
		Estimate: { labelText: 'Estimate', svg: SVGEstimate },
		Calendar: { labelText: 'Calendar', svg: SVGCalendar }
	};

	let data: LabelType | undefined = $derived(variants[variant]);
</script>

<Button
	{onclick}
	customClass="group flex flex-col gap-2 aspect-square max-w-[10rem] items-center justify-center
                rounded-lg border-3 border-white bg-white p-5 text-center text-sm
                font-medium text-[#3F58BA] shadow-lg shadow-[#3F58BA]/20 transition-colors
                hover:bg-[#3F58BA] hover:text-white hover:shadow-white/20"
>
	{#if data}
		<data.svg
			class="h-auto max-h-[80%] w-full fill-[#3F58BA] transition-colors group-hover:fill-white"
		></data.svg>
		{data.labelText}
	{/if}
</Button>
