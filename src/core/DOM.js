/**
 * Jquery's like API to DOM.
 *
 */
export const dom = () => {
  Element.prototype.addClass = function (className) {
    this.classList.add(className);
    return this;
  };

  Element.prototype.show = function (name) {
    this.style.display = "block";
    return this;
  };

  Element.prototype.hide = function (name) {
    this.style.display = "none";
    return this;
  };

  Element.prototype.removeClass = function (className) {
    this.classList.remove(className);
    return this;
  };

  Element.prototype.on = function (events, fn) {
    events.split(" ").forEach((event) => this.addEventListener(event, fn));
    return this;
  };

  return document.querySelector.bind(document);
};
