import { writable } from 'svelte/store';
import { Day } from '../types';

export const days = writable<Day[]>([new Day("1")]);