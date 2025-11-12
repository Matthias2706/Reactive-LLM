<script lang="ts" module>
</script>

<script lang="ts">
	import { goto } from '$app/navigation';

	import ShowCaseButton from '$lib/components/ShowCaseButton.svelte';
</script>

<div class="bg-cvt-blue flex h-screen items-center justify-center">
	<div class="grid grid-cols-2 gap-2">
		<ShowCaseButton
			onclick={() => {
				goto('/showcases/calendar/');
			}}>LLM Calendar</ShowCaseButton
		>
		<ShowCaseButton
			onclick={() => {
				goto('/showcases/brainstorming/');
			}}>LLM Brainstorming</ShowCaseButton
		>
		<ShowCaseButton>LLM Vocabulary Trainer</ShowCaseButton>
		<ShowCaseButton>LLM offer Chatbot</ShowCaseButton>
	</div>
</div>
