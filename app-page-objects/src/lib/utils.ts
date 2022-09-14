import { Locator } from 'playwright';
/**
 * Check whether the element has the specified CSS class or not.
 */
export async function hasClass(el: Locator, className: string): Promise<boolean> {
  const cls = await el.getAttribute('class');
  return new RegExp(`\\b${className}\\b`).test(cls);
}