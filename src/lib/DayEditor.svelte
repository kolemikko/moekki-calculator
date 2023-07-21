<script lang="ts">
	import { days } from '../stores/days';
	import { Attendance, Day } from '../types';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { EURO } from './Utils';
	import { people } from '../stores/people';

	$: $days,
		(() => {
			// console.log('Days changed');
		})();

	function addDay() {
		let d = new Day(($days.length + 1).toString());
		$days.push(d);
		$days = $days;
		for (var p of $people) {
			if (p.attendance.length !== $days.length) {
				p.attendance.push(new Attendance($days.length.toString()));
			}
		}
		$people = $people;
	}

	function removeDay() {
		$days.pop();
		$days = $days;
		for (var p of $people) {
			if (p.attendance.length !== $days.length - 1) {
				p.attendance.pop();
			}
		}
		$people = $people;
	}
</script>

<h2 class="h2" style="padding-bottom: 10px">Trip definition</h2>
<!-- <input class="input" type="text" placeholder="Name for" /> -->
<button class="btn variant-filled-primary" on:click={() => addDay()}>Add day</button>
<button class="btn variant-filled-primary" on:click={() => removeDay()}>Remove day</button>
<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-3 py-10">
	{#each $days as day}
		<div class="snap-start shrink-0 card w-20%">
			<div class="day-card">
				<h5 class="h5" style="padding-bottom: 10px">Day {day.name}</h5>
				<ListBox multiple spacing="space-y-3">
					<ListBoxItem bind:group={day.servings} name="medium" value="breakfast"
						>Breakfast
						<svelte:fragment slot="trail">
							{#if day.servings.includes('breakfast')}
								<p>{EURO(day.breakfast_day_rate).format()}</p>
							{/if}
						</svelte:fragment>
					</ListBoxItem>
					<ListBoxItem bind:group={day.servings} name="medium" value="lunch"
						>Lunch
						<svelte:fragment slot="trail">
							{#if day.servings.includes('lunch')}
								<p>{EURO(day.lunch_day_rate).format()}</p>
							{/if}
						</svelte:fragment>
					</ListBoxItem>
					<ListBoxItem bind:group={day.servings} name="medium" value="dinner"
						>Dinner
						<svelte:fragment slot="trail">
							{#if day.servings.includes('dinner')}
								<p>{EURO(day.dinner_day_rate).format()}</p>
							{/if}
						</svelte:fragment>
					</ListBoxItem>
					<ListBoxItem bind:group={day.servings} name="medium" value="snacks"
						>Snacks
						<svelte:fragment slot="trail">
							{#if day.servings.includes('snacks')}
								<p>{EURO(day.snacks_day_rate).format()}</p>
							{/if}
						</svelte:fragment>
					</ListBoxItem>
				</ListBox>
			</div>
		</div>
	{/each}
</div>

<style>
	.day-card {
		padding: 15px;
		border-width: 1px;
		border-radius: 10px;
	}
</style>
