<script>
	import Balances from '$lib/Balances.svelte';
	import DayEditor from '$lib/DayEditor.svelte';
	import ExpenseEditor from '$lib/ExpenseEditor.svelte';
	import PeopleEditor from '$lib/PeopleEditor.svelte';
	import Updates from '$lib/Updates.svelte';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
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
</div>
