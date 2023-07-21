import { writable } from 'svelte/store';
import type { Day } from '../types';

export const days = writable<Day[]>([]);