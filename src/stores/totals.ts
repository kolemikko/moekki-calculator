import { writable } from 'svelte/store';

interface TotalCosts {
    breakfast: number,
    lunch: number,
    dinner: number,
    snacks: number,
    all: number,
}

export const totalCosts = writable<TotalCosts>(<TotalCosts>{ breakfast: 0.0, lunch: 0.0, dinner: 0.0, snacks: 0.0, all: 0.0 });