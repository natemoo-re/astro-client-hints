/// <reference types="astro/client" />

declare namespace App {
    interface Locals {
        clientHints: {
            prefersReducedMotion?: 'no-preference' | 'reduce'
            prefersReducedTransparency?: 'no-preference' | 'reduce'
            prefersContrast?: 'no-preference' | 'less' | 'more' | 'custom'
            forcedColors?: 'active' | 'none'
            prefersColorScheme?: 'light' | 'dark'
            prefersReducedData?: 'no-preference' | 'reduce'
        }
    }
}
