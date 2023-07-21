<script lang="ts">
	import { days } from '../stores/days';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import { Day } from '../types';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

	$: $days,
		(() => {
			// console.log('Days changed');
		})();

	function addDay() {
		let d = new Day(($days.length + 1).toString());
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
<div class="day-definitions">
	{#each $days as day}
		<div class="day-servings">
			<p>Day {day.name}</p>
			<ListBox multiple>
				<ListBoxItem bind:group={day.servings} name="medium" value="breakfast"
					>Breakfast
					{#if day.servings.includes('breakfast')}
						<p>{day.breakfast_day_rate}€</p>
					{/if}
				</ListBoxItem>
				<ListBoxItem bind:group={day.servings} name="medium" value="lunch"
					>Lunch {#if day.servings.includes('lunch')}
						<p>{day.lunch_day_rate}€</p>
					{/if}
				</ListBoxItem>
				<ListBoxItem bind:group={day.servings} name="medium" value="dinner"
					>Dinner
					{#if day.servings.includes('dinner')}
						<p>{day.dinner_day_rate}€</p>
					{/if}
				</ListBoxItem>
				<ListBoxItem bind:group={day.servings} name="medium" value="snacks"
					>Snacks
					{#if day.servings.includes('snacks')}
						<p>{day.snacks_day_rate}€</p>
					{/if}
				</ListBoxItem>
			</ListBox>
		</div>
	{/each}
</div>

<style>
	.day-servings {
		/* max-width: 200px; */
		width: 15%;
		padding: 10px;
		/* border-width: 3px; */
		/* border-radius: 30px; */
		/* margin: 0 auto; */
	}

	.day-definitions {
		display: grid;
		grid-auto-flow: dense;
	}
</style>
