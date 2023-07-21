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

<h3 class="h3" style="padding-bottom: 10px">People & Attendance</h3>
<input class="input" type="text" placeholder="Name" bind:value={new_person_name} />
<button
	class="btn variant-filled-primary"
	on:click={() => addPerson()}
	disabled={new_person_name.length < 2}>Add person</button
>
<!-- <button class="btn variant-filled-primary" on:click={() => removeDay()}>Remove day</button> -->
{#each $people as person}
	<p>{person.name}</p>
	{#each person.attendance as a}
		<p>Day {a.day_name}</p>
		<SlideToggle name="Present" bind:checked={a.present}>Present</SlideToggle>
		{#if a.present}
			<ListBox multiple>
				<ListBoxItem bind:group={a.servings} name="medium" value="breakfast">Breakfast</ListBoxItem>
				<ListBoxItem bind:group={a.servings} name="medium" value="lunch">Lunch</ListBoxItem>
				<ListBoxItem bind:group={a.servings} name="medium" value="dinner">Dinner</ListBoxItem>
				<ListBoxItem bind:group={a.servings} name="medium" value="snacks">Snacks</ListBoxItem>
			</ListBox>
		{/if}
	{/each}
	<button class="btn variant-soft-warning" on:click={() => removePerson(person.name)}>X</button>
{/each}
