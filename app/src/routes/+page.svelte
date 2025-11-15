<script lang="ts" module>
	import { goto } from '$app/navigation';
	import ShowCaseButton from '$lib/components/ShowCaseButton.svelte';
</script>

<script lang="ts">
</script>

<div class="bg-cvt-blue flex h-screen items-center justify-center">
	<div class="grid grid-cols-2 gap-2">
		<ShowCaseButton
			label="Calendar"
			variant="Calendar"
			onclick={() => {
				goto('/showcases/calendar/');
			}}
		></ShowCaseButton>
		<ShowCaseButton
			label="Mindmap"
			variant="Mindmap"
			onclick={() => {
				goto('/showcases/brainstorming/');
			}}
		></ShowCaseButton>
		<ShowCaseButton label="Vocabulary" variant="Vocabulary"></ShowCaseButton>
		<ShowCaseButton label="Estimate" variant="Estimate"></ShowCaseButton>
	</div>
</div>
