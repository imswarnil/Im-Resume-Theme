//
// typewriter.js

class Typewriter {
  constructor(element, options = {}) {
    this.element = element;
    this.text = element.dataset.text;
    this.speed = options.speed || 100;
    this.loop = options.loop || false;
    this.index = 0;
    this.typing = true;

    if (this.text) {
      this.type();
    }
  }

  type() {
    if (this.index < this.text.length) {
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), this.speed);
    } else if (this.loop) {
      setTimeout(() => this.reset(), this.speed * 3);
    }
  }

  reset() {
    this.element.textContent = '';
    this.index = 0;
    setTimeout(() => this.type(), this.speed);
  }
}

// Initialize all elements with the class 'typewriter'
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.typewriter').forEach((el) => {
    const speed = el.dataset.speed ? parseInt(el.dataset.speed) : 100;
    const loop = el.dataset.loop === 'true';
    new Typewriter(el, { speed, loop });
  });
});
