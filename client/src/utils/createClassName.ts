/**
 * Utility function for use with prettier-plugin-tailwindcss
 */
export default function CreateClassName(
  classNames: string | Array<string> | TemplateStringsArray,
) {
  if (classNames instanceof Array) return classNames.join(' ');
  return classNames;
}
