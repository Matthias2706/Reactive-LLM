<script lang="ts" module>
	import Button, { type ButtonProps } from './Button.svelte';

	const modelOrder = ['gpt4o-only', 'mix', 'gpt5-only'] as const;
	type ModelType = (typeof modelOrder)[number];

	const tokensOrder = ['less', 'medium', 'lot'] as const;
	type TokensType = (typeof tokensOrder)[number];

	interface PromptPropsAdditional {
		value?: string;
		onPrompt: (promt: string) => void;
		promptState?: string;
		model: ModelType;
		tokens: TokensType;
	}

	export type PromptProps = PromptPropsAdditional & Pick<ButtonProps, 'isLoading'>;
</script>

<script lang="ts">
	let {
		onPrompt,
		value = '',
		promptState = '',
		isLoading,
		tokens = $bindable('medium'),
		model = $bindable('gpt4o-only'),
		...props
	}: PromptProps = $props();
	let promptInput = $state(value);

	const nextModel = () => {
		model = modelOrder[(modelOrder.indexOf(model) + 1) % modelOrder.length];
	};

	const nextTokens = () => {
		tokens = tokensOrder[(tokensOrder.indexOf(tokens) + 1) % tokensOrder.length];
	};
</script>

<div class="h-full w-full bg-gray-100 p-3">
	<p>Prompt:</p>
	<textarea
		bind:value={promptInput}
		class="h-[80%] w-full resize-none rounded-md border bg-white p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
		placeholder="Write here your prompt..."
	></textarea>
	<div class="flex gap-2">
		<Button
			{isLoading}
			onclick={() => {
				onPrompt(promptInput);
			}}>Visualize</Button
		>
		<Button onclick={nextModel} customClass="ml-auto">Model: {model}</Button>
		<Button onclick={nextTokens}>Tokens: {tokens}</Button>
	</div>
	State: {promptState}
</div>
