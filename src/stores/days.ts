import type { Writable } from 'svelte/store';
import { Day } from '../types';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const days: Writable<Day[]> = localStorageStore('days', [new Day("1")]);