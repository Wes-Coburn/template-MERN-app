export default function CreateClassName(
  classNames: string | Array<string> | TemplateStringsArray,
) {
  if (classNames instanceof Array) return classNames.join(' ');
  return classNames;
}
