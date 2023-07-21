<script lang="ts">
	import { expenses } from '../stores/expenses';
	import { ListBox, ListBoxItem, SlideToggle } from '@skeletonlabs/skeleton';
	import { Expense } from '../types';
	import { totalCosts } from '../stores/totals';

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

<h3 class="h3">Expenses</h3>
<input class="input" type="text" placeholder="Name" bind:value={new_expense_name} />
<input class="input" type="number" placeholder="Price" bind:value={new_expense_price} />
<button
	class="btn variant-filled-primary"
	on:click={() => addExpense()}
	disabled={new_expense_name.length < 3 || new_expense_price === 0}>Add expense</button
>
<!-- <button class="btn variant-filled-primary" on:click={() => removeDay()}>Remove day</button> -->
{#each $expenses as expense}
	<div>
		<p>{expense.name}</p>
		<p>{expense.price}€</p>
		<ListBox multiple>
			<ListBoxItem bind:group={expense.servings} name="medium" value="breakfast"
				>Breakfast</ListBoxItem
			>
			<ListBoxItem bind:group={expense.servings} name="medium" value="lunch">Lunch</ListBoxItem>
			<ListBoxItem bind:group={expense.servings} name="medium" value="dinner">Dinner</ListBoxItem>
			<ListBoxItem bind:group={expense.servings} name="medium" value="snacks">Snacks</ListBoxItem>
		</ListBox>
		<button class="btn variant-ghost-warning" on:click={() => removeExpense(expense.name)}>X</button
		>
	</div>
{/each}

<p>
	Total: {$totalCosts.all}€ Breakfast: {$totalCosts.breakfast}€ Lunch: {$totalCosts.lunch}€ Dinner: {$totalCosts.dinner}€
	Snacks: {$totalCosts.snacks}€
</p>
