export default function classNames(classList) {
  return classList
    .filter(conditionalClass => conditionalClass)
    .join(' ');
}
