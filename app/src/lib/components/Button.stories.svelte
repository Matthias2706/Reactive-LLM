<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';

	const { Story } = defineMeta({
		title: 'Design/Elements/Button',
		component: Button,
		argTypes: {},
		args: {}
	});
</script>

<Story name="Button" exportName="ButtonStory">Children Content</Story>
