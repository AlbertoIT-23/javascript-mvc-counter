class MutableNumberView {
  constructor(model) {
    // The view needs to know about the model to display its data
    this.model = model;
    // Callback will be set later by the controller
  }

  // Methods to register button callbacks
  registerIncrementCallback(onIncrementCallback) {
    this.onIncrementCallback = onIncrementCallback;
  }

  registerDecrementCallback(onDecrementCallback) {
    this.onDecrementCallback = onDecrementCallback;
  }

  // Method to update the display
  renderUpdate() {
    this.numberSpan.textContent = this.model.value;
  }

  // Initial render method
  renderInitial() {
    //Create DOM elements
    this.container = document.createElement('div');
    this.numberSpan = document.createElement('span');
    this.incrementButton = document.createElement('button');
    this.decrementButton = document.createElement('button');

    // Set button text
    this.incrementButton.textContent = '+';
    this.decrementButton.textContent = '-';

    // Add click handlers
    this.incrementButton.onclick = () => this.onIncrementCallback();
    this.decrementButton.onclick = () => this.onDecrementCallback();

    // Assemble the DOM
    this.container.appendChild(this.numberSpan);
    this.container.appendChild(this.incrementButton);
    this.container.appendChild(this.decrementButton);

    // Inital render
    this.renderUpdate();

    return this.container;
  }
}

export { MutableNumberView };
