<script lang="ts">
	import { people } from '../stores/people';
	import { days } from '../stores/days';
	import { ListBox, ListBoxItem, SlideToggle } from '@skeletonlabs/skeleton';
	import { Person } from '../types';

	let new_person_name: String = '';

	function addPerson() {
		let new_person = new Person(new_person_name, $days);
		$people.push(new_person);
		$people = $people;
		new_person_name = '';
	}

	function removePerson(name: String) {
		let idx = $people.findIndex((x) => x.name === name);
		$people.splice(idx, 1);
		$people = $people;
	}
</script>

<h2 class="h2" style="padding-bottom: 10px">People & Attendance</h2>
<input
	class="input"
	type="text"
	placeholder="Name"
	style="max-width:20%;padding:3px;"
	bind:value={new_person_name}
/>
<button
	class="btn variant-filled-primary"
	on:click={() => addPerson()}
	disabled={new_person_name.length < 2}>Add person</button
>
<ul class="list py-3">
	{#each $people as person}
		<li class="py-5 px-3 scroll-px-4 scroll-smooth overflow-x-auto">
			<h5 class="h5">{person.name}</h5>
			{#each person.attendance as a}
				<p>Day {a.day_name}</p>
				<SlideToggle name="Present" bind:checked={a.present} />
				{#if a.present}
					<ListBox multiple>
						{#if $days.find((x) => x.name === a.day_name)?.servings.includes('breakfast')}
							<ListBoxItem bind:group={a.servings} name="medium" value="breakfast"
								>Breakfast</ListBoxItem
							>
						{/if}
						{#if $days.find((x) => x.name === a.day_name)?.servings.includes('lunch')}
							<ListBoxItem bind:group={a.servings} name="medium" value="lunch">Lunch</ListBoxItem>
						{/if}
						{#if $days.find((x) => x.name === a.day_name)?.servings.includes('dinner')}
							<ListBoxItem bind:group={a.servings} name="medium" value="dinner">Dinner</ListBoxItem>
						{/if}
						{#if $days.find((x) => x.name === a.day_name)?.servings.includes('snacks')}
							<ListBoxItem bind:group={a.servings} name="medium" value="snacks">Snacks</ListBoxItem>
						{/if}
					</ListBox>
				{/if}
			{/each}
			<button class="btn variant-ghost-warning" on:click={() => removePerson(person.name)}>X</button
			>
		</li>
	{/each}
</ul>
