import type { Writable } from 'svelte/store';
import type { Expense } from '../types';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const expenses: Writable<Expense[]> = localStorageStore('expenses', []);
