<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ShowCaseButton from './ShowCaseButton.svelte';

	const { Story } = defineMeta({
		title: 'Design/Elements/ShowCaseButton',
		component: ShowCaseButton,
		argTypes: {},
		args: {
			label: 'BrainStorming'
		}
	});
</script>

<Story name="ShowCaseButton" exportName="ShowCaseButtonStory"></Story>
