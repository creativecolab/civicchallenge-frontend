import React from 'react';
import { getDisplayName } from 'util/hocHelpers';

// Object to collect refs
const refs = {};


/**
 * reset
 */

export function reset() {
  Object.keys(refs).forEach((key) => {
    delete refs[key];
  });
}


/**
 * withCollectRef
 */

export function withCollectRef(ComposedComponent) {
  const composedComponentDisplayName = getDisplayName(ComposedComponent);

  function CollectRefHOC(props) {
    return (
      <ComposedComponent {...props} componentRef={(el) => { refs[composedComponentDisplayName] = el; }} />
    );
  }

  CollectRefHOC.displayName = `withCollectRef(${composedComponentDisplayName})`;
  return CollectRefHOC;
}


/**
 * withProvideRefs
 */

export function withProvideRefs(ComposedComponent) {
  function CollectRefHOC(props) {
    return (
      <ComposedComponent {...props} refs={refs} />
    );
  }

  CollectRefHOC.displayName = `withProvideRefs(${getDisplayName(ComposedComponent)})`;
  return CollectRefHOC;
}
