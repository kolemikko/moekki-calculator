<script lang="ts">
	import { people } from '../stores/people';
	import { days } from '../stores/days';
	import { EURO } from './Utils';
</script>

<h2 class="h2" style="padding-bottom: 10px">Balances</h2>
<div class="px-3">
	{#each $people as person}
		<h5>{person.name}: {EURO(person.cost).format()}</h5>
	{/each}
</div>
