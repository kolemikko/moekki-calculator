<script lang="ts">
	import { expenses } from '../stores/expenses';
	import { ListBox, ListBoxItem, SlideToggle } from '@skeletonlabs/skeleton';
	import { Expense } from '../types';
	import { totalCosts } from '../stores/totals';
	import { EURO } from './Utils';

	let new_expense_name: String = '';
	let new_expense_price: number = 0.0;

	function addExpense() {
		let new_expense = new Expense(new_expense_name, new_expense_price);
		$expenses.push(new_expense);
		$expenses = $expenses;
		new_expense_name = '';
		new_expense_price = 0.0;
	}

	function removeExpense(name: String) {
		let idx = $expenses.findIndex((x) => x.name === name);
		$expenses.splice(idx, 1);
		$expenses = $expenses;
	}
</script>

<h2 class="h2" style="padding-bottom: 10px">Expenses</h2>
<input
	class="input"
	type="text"
	style="max-width:30%;padding:3px;"
	placeholder="Name"
	bind:value={new_expense_name}
/>
<input
	class="input"
	type="number"
	style="max-width:30%;padding:3px;"
	placeholder="Price"
	bind:value={new_expense_price}
/>
<button
	class="btn variant-filled-primary"
	on:click={() => addExpense()}
	disabled={new_expense_name.length < 3 || new_expense_price === 0}>Add expense</button
>
<ul class="list py-3 px-3 scroll-px-4 scroll-smooth overflow-x-auto">
	{#each $expenses as expense}
		<li class="py-3">
			<h5 class="h5">{expense.name} {EURO(expense.price).format()}</h5>
			<ListBox multiple spacing="space-y-5">
				<div class="snap-x snap-mandatory flex gap-3">
					<ListBoxItem bind:group={expense.servings} name="medium" value="breakfast"
						>Breakfast
					</ListBoxItem>
					<ListBoxItem bind:group={expense.servings} name="medium" value="lunch">Lunch</ListBoxItem>
					<ListBoxItem bind:group={expense.servings} name="medium" value="dinner"
						>Dinner</ListBoxItem
					>
					<ListBoxItem bind:group={expense.servings} name="medium" value="snacks"
						>Snacks</ListBoxItem
					>
				</div>
			</ListBox>
			<button class="btn variant-ghost-warning" on:click={() => removeExpense(expense.name)}
				>X</button
			>
			{#if expense.servings.length === 0}
				<span class="chip variant-filled-error">!</span>
			{/if}
		</li>
	{/each}
</ul>

<h6 class="h6">Breakfast: {EURO($totalCosts.breakfast).format()}</h6>
<h6 class="h6">Lunch: {EURO($totalCosts.lunch).format()}</h6>
<h6 class="h6">Dinner: {EURO($totalCosts.dinner).format()}</h6>
<h6 class="h6">Snacks: {EURO($totalCosts.snacks).format()}</h6>
<h6 class="h6">Total: {EURO($totalCosts.all).format()}</h6>
