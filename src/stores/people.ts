import type { Writable } from 'svelte/store';
import type { Person } from '../types';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const people: Writable<Person[]> = localStorageStore('people', []);
