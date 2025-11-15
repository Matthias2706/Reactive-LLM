<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import LoadingSpinner from './LoadingSpinner.svelte';

	const { Story } = defineMeta({
		title: 'Design/Elements/LoadingSpinner',
		component: LoadingSpinner,
		argTypes: {},
		args: {
			class: 'size-8'
		}
	});
</script>

<Story name="LoadingSpinner" exportName="LoadingSpinnerStory">Children Content</Story>
