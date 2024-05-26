import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes efficiently, resolving conflicts.
 *
 * This function combines the functionality of `clsx` and `tailwind-merge` libraries
 * to merge an arbitrary number of class name strings or objects, resolving any
 * conflicting class names based on Tailwind's class precedence rules.
 *
 * @param {...ClassValue} inputs - One or more class name strings or objects to merge.
 * @returns {string} The merged class name string with conflicts resolved.
 *
 * @example
 * cn('text-lg p-4', { 'bg-blue-500': true, 'text-white': true }, 'rounded p-2')
 * // Returns: 'text-lg text-white bg-blue-500 rounded p-2'
 *
 * @example
 * cn('flex justify-center', 'items-center', 'hover:bg-green-500 focus:ring-2')
 * // Returns: 'flex justify-center items-center hover:bg-green-500 focus:ring-2'
 *
 * @example
 * cn('block', someCondition && 'hidden', isActive ? 'bg-red-500' : 'bg-green-500')
 * // Returns: 'block bg-green-500' if someCondition is false and isActive is false
 * // Returns: 'block hidden bg-red-500' if someCondition is true and isActive is true
 */
export function cn(...inputs: ClassValue[]){
  return twMerge(clsx(inputs));
}
