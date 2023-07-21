<script lang="ts">
	import { expenses } from '../stores/expenses';
	import { totalCosts } from '../stores/totals';

	$: $expenses,
		(() => {
			updateTotalCosts();
		})();

	function updateTotalCosts() {
		let total = 0.0;
		let total_breakfast = 0.0;
		let total_lunch = 0.0;
		let total_dinner = 0.0;
		let total_snacks = 0.0;
		for (var e of $expenses) {
			total += e.price;
			let divided = 0.0;
			if (e.servings.includes('breakfast')) {
				divided += 1.0;
			}
			if (e.servings.includes('lunch')) {
				divided += 1.0;
			}
			if (e.servings.includes('dinner')) {
				divided += 1.0;
			}
			if (e.servings.includes('snacks')) {
				divided += 1.0;
			}

			let divided_price = e.price / divided;
			if (e.servings.includes('breakfast')) {
				total_breakfast += divided_price;
			}
			if (e.servings.includes('lunch')) {
				total_lunch += divided_price;
			}
			if (e.servings.includes('dinner')) {
				total_dinner += divided_price;
			}
			if (e.servings.includes('snacks')) {
				total_snacks += divided_price;
			}
		}

		$totalCosts.all = total;
		$totalCosts.breakfast = total_breakfast;
		$totalCosts.lunch = total_lunch;
		$totalCosts.dinner = total_dinner;
		$totalCosts.snacks = total_snacks;
	}
</script>
