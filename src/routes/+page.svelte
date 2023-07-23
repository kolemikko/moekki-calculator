<script>
	import Balances from '$lib/Balances.svelte';
	import DayEditor from '$lib/DayEditor.svelte';
	import ExpenseEditor from '$lib/ExpenseEditor.svelte';
	import PeopleEditor from '$lib/PeopleEditor.svelte';
	import Updates from '$lib/Updates.svelte';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { days } from '../stores/days';
	import { Day } from '../types';
	import { expenses } from '../stores/expenses';
	import { people } from '../stores/people';

	function resetSession() {
		$days.splice(0, $days.length);
		$days.push(new Day('1'));
		$days = $days;

		$expenses.splice(0, $expenses.length);
		$expenses = $expenses;

		$people.splice(0, $people.length);
		$people = $people;
	}
</script>

<AppBar>
	<div class="space-y-5">
		<h2 class="h2">Moekki-calculator</h2>
	</div>
	<LightSwitch />
</AppBar>
<div class="container mx-auto p-8 space-y-8">
	<Updates />
	<section class="card py-5 px-5" style="border-radius:5px;">
		<DayEditor />
	</section>
	<section class="card py-5 px-5" style="border-radius:5px;">
		<ExpenseEditor />
	</section>
	<section class="card py-5 px-5" style="border-radius:5px;">
		<PeopleEditor />
	</section>
	<section class="card py-5 px-5" style="border-radius:5px;">
		<Balances />
	</section>
	<section>
		<button class="btn btn-sm variant-ghost-warning" on:click={() => resetSession()}
			>Reset session</button
		>
	</section>
</div>
