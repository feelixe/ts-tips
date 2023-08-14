/**
 * Vitest is by far the easiest way to set up test suites when using type scripts.
 * It requires little or no configuration.
 * 1. pnpm install -D vite vitest
 * 2. Create a file.test.ts
 * 3. Add vitest to package.json script or run pnpm exec vitest
 */

import { describe, it, expect } from 'vitest';
import sum from "./sum"

describe('sum', () => {
    it('should correctly sum up the numbers', () => {
        expect(sum(1, 2, 3)).toBe(6);
        expect(sum(5, 5, 5, 5)).toBe(20);
        expect(sum(0)).toBe(0);
        expect(sum(-1, -2, -3, -4)).toBe(-10);
    });

    it('should handle floating point numbers', () => {
        expect(sum(1.5, 2.5, 3.5)).toBeCloseTo(7.5);
        const hej = sum(0.2, 0.1)
        expect(sum(0.2 + 0.1)).toBeCloseTo(0.3);
    });

    it('should throw an error if non-numbers are provided', () => {
        // @ts-expect-error allow invalid args
        expect(() => sum("1", 2, 3)).toThrowError()

        // @ts-expect-error allow invalid args
        expect(() => sum(null, 2, 3)).toThrowError()

        expect(() => sum(NaN, 2, 3)).toThrowError()
    });

    it('should throw an error if less then one argument is passed', () => {
        expect(() => sum()).toThrowError()
    });
});
