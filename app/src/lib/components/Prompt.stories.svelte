<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Prompt from './Prompt.svelte';

	const { Story } = defineMeta({
		title: 'Design/Elements/Prompt',
		component: Prompt,
		argTypes: {},
		args: {}
	});
</script>

<Story name="Prompt" exportName="PromptStory"></Story>
