import { writable } from 'svelte/store';
import type { Expense } from '../types';

export const expenses = writable<Expense[]>([]);
