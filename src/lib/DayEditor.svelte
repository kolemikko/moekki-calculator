<script lang="ts">
	import { days } from '../stores/days';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import { Day } from '../types.ts';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	$: $days,
		(() => {
			// console.log('Days changed');
		})();

	function addDay() {
		let d = new Day($days.length + 1);
		$days.push(d);
		$days = $days;
	}

	function removeDay() {
		$days.pop();
		$days = $days;
	}
</script>

<h3 class="h3">Trip definition</h3>
<!-- <input class="input" type="text" placeholder="Name for" /> -->
<button class="btn variant-filled-primary" on:click={() => addDay()}>Add day</button>
<button class="btn variant-filled-primary" on:click={() => removeDay()}>Remove day</button>
{#each $days as day}
	<div class="space-x-2">
		<p>Day {day.name}</p>
		<ListBox multiple>
			<div class="row">
				<ListBoxItem bind:group={day.servings} name="medium" value="breakfast"
					>Breakfast</ListBoxItem
				>
				{#if day.servings.includes('breakfast')}
					<p>{day.breakfast_day_rate}€</p>
				{/if}
			</div>
			<ListBoxItem bind:group={day.servings} name="medium" value="lunch">Lunch</ListBoxItem>
			{#if day.servings.includes('lunch')}
				<p>{day.lunch_day_rate}€</p>
			{/if}
			<ListBoxItem bind:group={day.servings} name="medium" value="dinner">Dinner</ListBoxItem>
			{#if day.servings.includes('dinner')}
				<p>{day.dinner_day_rate}€</p>
			{/if}
			<ListBoxItem bind:group={day.servings} name="medium" value="snacks">Snacks</ListBoxItem>
			{#if day.servings.includes('snacks')}
				<p>{day.snacks_day_rate}€</p>
			{/if}
		</ListBox>
	</div>
{/each}
