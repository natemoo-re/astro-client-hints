import { sequence } from 'astro/middleware';
import { clientHints } from './client-hints.js';

export const onRequest = sequence(clientHints);
