<script lang="ts" module>
	import { onMount } from 'svelte';
	import Calendar from '../stories/Calendar.svelte';
	import Rules from '../stories/Rules.svelte';
</script>

<script lang="ts">
	let rules: Rule[] = $state([]);

	async function getRules(): Promise<Rule[]> {
		const res = await fetch('/api/rules');
		if (res.ok) return (await res.json()) as Rule[];
		else return [];
	}

	async function removeRule(rule: Rule) {
		await fetch('/api/rules', {
			method: 'DELETE',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ key: rule.key })
		});

		rules = await getRules();
	}

	onMount(async () => {
		getRules().then((r) => {
			rules = r;
		});
	});
</script>

<div class="flex gap-4 p-4">
	<Rules {rules} onRemove={removeRule}></Rules>
	<Calendar schedules={[]}></Calendar>
</div>
