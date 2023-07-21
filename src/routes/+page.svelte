<script>
	import DayEditor from '$lib/DayEditor.svelte';
	import ExpenseEditor from '$lib/ExpenseEditor.svelte';
	import PeopleEditor from '$lib/PeopleEditor.svelte';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

export const prerender = true;

<AppBar>
	<div class="space-y-5">
		<h2 class="h2">Moekki-calculator</h2>
	</div>
	<LightSwitch />
	<!-- <h1>Moekki-calculator</h1> -->
</AppBar>
<!-- <div class="container h-full mx-auto flex justify-center items-center"> -->
<div class="container mx-auto p-8 space-y-8">
	<!-- <div class="space-y-5"> -->
	<!-- </div> -->
	<section>
		<DayEditor />
	</section>
	<section>
		<ExpenseEditor />
	</section>
	<section>
		<PeopleEditor />
	</section>
</div>
