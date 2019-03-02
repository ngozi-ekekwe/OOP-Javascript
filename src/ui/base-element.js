export class BaseElement {

  constructor() {
    this.element = null; // jquery 
  }

  createElement() {
   let s = this.getElementString();
   this.element = $(s);
  }

  appendToElement(el) {
    this.createElement();
    el.append(this.element);
  }

  getElementString() {
    throw 'Please override getElementString() in base element';
  }
}