import { TweenLite, CSSPlugin } from 'gsap'; // eslint-disable-line no-unused-vars

const noop = () => {};

export default function chainAnimations(animations) {
  const fn = animations.reduceRight((prev, curr) => {
    let currAnimations = [];
    if (curr.constructor === Array) {
      currAnimations = curr;
    } else {
      currAnimations = [curr];
    }

    return () => {
      currAnimations.forEach((animation) => {
        const { el, duration, from, to, callback } = animation;

        TweenLite.fromTo(
          el,
          duration,
          from,
          {
            ...to,
            onComplete: callback ? () => { prev(); callback(); } : prev,
          }
        );
      });
    };
  }, noop);

  fn();
}
