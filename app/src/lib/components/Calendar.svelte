<script lang="ts" module>
	import CalendarDay, { type Schedule } from './CalendarDay.svelte';

	const DAY_LABELS = {
		Mo: 'Mo',
		Tue: 'Di',
		Wed: 'Mi',
		Thu: 'Do',
		Fri: 'Fr'
	} as const;

	type Day = keyof typeof DAY_LABELS;
	type Technician = string;

	type ScheduleExtended = Schedule & {
		technician: string;
		day: Day;
	};

	interface CalendarProps {
		schedules: ScheduleExtended[];
	}
</script>

<script lang="ts">
	let { ...props }: CalendarProps = $props();

	let technicians = ['Bob', 'Fred', 'Susi'];
	const header = ['Technician', ...Object.keys(DAY_LABELS)] as const;

	type ScheduleList = Record<Technician, Partial<Record<Day, Schedule>>>;
	let schedules: ScheduleList = $derived.by(() => {
		let ret = props.schedules.reduce<ScheduleList>(
			(acc, { key, start, end, label, day, technician }) => {
				acc[technician] ??= {};
				acc[technician]![day] = { key, start, end, label };
				return acc;
			},
			{}
		);
		return ret;
	});

	function getSchedules(technician: string, day: string): Schedule[] {
		return props.schedules
			.filter((s) => {
				return s.day === day && s.technician === technician;
			})
			.map(({ key, start, end, label }) => ({ key, start, end, label }));
	}
</script>

<div class="relative w-full overflow-hidden rounded-md border border-gray-300">
	<header class="grid grid-cols-6">
		{#each header as day, i}
			<div class="border-r border-gray-200 p-2 last:border-r-0 odd:bg-blue-50 even:bg-blue-100">
				{day}
			</div>
		{/each}
	</header>
	<main class="grid h-full grid-cols-6">
		{#each technicians as technician, i}
			{#each header as head, i}
				<div class="h-auto border-r border-gray-200 last:border-r-0 even:bg-gray-50">
					{#if i === 0}
						<div class="flex h-full items-center justify-center">
							{technician}
						</div>
					{:else}
						<CalendarDay schedules={getSchedules(technician, head)}></CalendarDay>
					{/if}
				</div>
			{/each}
		{/each}
	</main>
</div>
