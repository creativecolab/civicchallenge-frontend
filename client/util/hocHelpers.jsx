export function chainHOC(...hocs) {
  return hocs.reduce((acc, curr) => component => acc(curr(component)));
}

export function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}
