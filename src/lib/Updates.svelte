<script lang="ts">
	import { days } from '../stores/days';
	import { expenses } from '../stores/expenses';
	import { people } from '../stores/people';
	import { totalCosts } from '../stores/totals';

	$: $days,
		$expenses,
		(() => {
			updateTotalCosts();
			updateDayRates();
		})();

	$: $days,
		$people,
		(() => {
			updateAttendances();
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

	function updateDayRates() {
		let breakfast_divided: number = 0.0;
		let lunch_divided: number = 0.0;
		let dinner_divided: number = 0.0;
		let snacks_divided: number = 0.0;

		for (var d of $days) {
			if (d.servings.includes('breakfast')) {
				breakfast_divided += 1.0;
			}
			if (d.servings.includes('lunch')) {
				lunch_divided += 1.0;
			}
			if (d.servings.includes('dinner')) {
				dinner_divided += 1.0;
			}
			if (d.servings.includes('snacks')) {
				snacks_divided += 1.0;
			}
		}

		for (var d of $days) {
			if (d.servings.includes('breakfast')) {
				d.breakfast_day_rate = $totalCosts.breakfast / breakfast_divided;
			} else {
				d.breakfast_day_rate = 0.0;
			}
			if (d.servings.includes('lunch')) {
				d.lunch_day_rate = $totalCosts.lunch / lunch_divided;
			} else {
				d.lunch_day_rate = 0.0;
			}
			if (d.servings.includes('dinner')) {
				d.dinner_day_rate = $totalCosts.dinner / dinner_divided;
			} else {
				d.dinner_day_rate = 0.0;
			}
			if (d.servings.includes('snacks')) {
				d.snacks_day_rate = $totalCosts.snacks / snacks_divided;
			} else {
				d.snacks_day_rate = 0.0;
			}
			d.total_day_rate =
				d.breakfast_day_rate + d.lunch_day_rate + d.dinner_day_rate + d.snacks_day_rate;
		}
		$days = $days;
	}

	function updateAttendances() {
		$days.forEach((day, idx) => {
			if (day.servings.includes('breakfast')) {
				let count: number = 0.0;
				for (var p of $people) {
					if (
						p.attendance.at(idx)?.present &&
						p.attendance.at(idx)?.servings.includes('breakfast')
					) {
						count += 1.0;
					}
				}
				day.breakfast_attendance_count = count;
			}
			if (day.servings.includes('lunch')) {
				let count: number = 0.0;
				for (var p of $people) {
					if (p.attendance.at(idx)?.present && p.attendance.at(idx)?.servings.includes('lunch')) {
						count += 1.0;
					}
				}
				day.lunch_attendance_count = count;
			}
			if (day.servings.includes('dinner')) {
				let count: number = 0.0;
				for (var p of $people) {
					if (p.attendance.at(idx)?.present && p.attendance.at(idx)?.servings.includes('dinner')) {
						count += 1.0;
					}
				}
				day.dinner_attendance_count = count;
			}
			if (day.servings.includes('snacks')) {
				let count: number = 0.0;
				for (var p of $people) {
					if (p.attendance.at(idx)?.present && p.attendance.at(idx)?.servings.includes('snacks')) {
						count += 1.0;
					}
				}
				day.snacks_attendance_count = count;
			}
		});
	}
</script>
