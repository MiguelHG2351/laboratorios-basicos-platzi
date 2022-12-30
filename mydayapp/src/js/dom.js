/**
 * @param {String} tag
 * @param {Object} attr - attributes
 * @param {HTMLElement | Array<HTMLElement> | String} children
 * @returns {HTMLElement}
 */
export const createElement = (tag, attr, children) => {
  const element = document.createElement(tag);
  if (attr) Object.assign(element, attr);
  if (children instanceof HTMLElement) element.appendChild(children);
  if (children instanceof Array && children[0] instanceof HTMLElement)
    element.append(...children);
  if (typeof children === 'string') element.innerText = children;
  return element;
};
