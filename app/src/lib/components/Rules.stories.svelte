<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Rules from './Rules.svelte';

	const { Story } = defineMeta({
		title: 'Design/Elements/Rules',
		component: Rules,
		argTypes: {},

		args: {
			rules: [
				{
					key: 0,
					shortName: 'Important Rule',
					rule: 'Do this and that'
				},
				{
					key: 1,
					shortName: 'Onother rule',
					rule: 'That rule'
				}
			]
		}
	});
</script>

<Story name="Rules" exportName="RulesStory"></Story>
