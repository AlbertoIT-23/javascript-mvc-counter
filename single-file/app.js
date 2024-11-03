// 1. Model
// Start with the Model since it's the core of our data
class MutableNumberModel {
  constructor(initialValue) {
    // Store the initial value
    this.value = initialValue;
    // We'll need a way to notify when changes happen
    // but we don't initialize it yet - it will be set later
  }

  //Methods to modify the data
  increment() {
    this.value++;
    // Notify the observer that data changed
    this.onChangeCallback();
  }

  decrement() {
    this.value--;
    // Notify the observer that data changed
    this.onChangeCallback();
  }

  // Methon to register the callback
  registerChangeCallback(onChangeCallback) {
    this.onChangeCallback = onChangeCallback;
  }
}

// 2. View
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

// 3. Controller
class MutableNumberController {
  constructor(model, view) {
    // Store references to model and view
    this.model = model;
    this.view = view;

    // Wire up the model -> view updates
    this.model.registerChangeCallback(() => this.view.renderUpdate());

    // Wire up the view -> model updates
    this.view.registerIncrementCallback(() => this.model.increment());
    this.view.registerDecrementCallback(() => this.model.decrement());
  }
}

// 4. Usage
//Create the instances
const model = new MutableNumberModel(0);
const view = new MutableNumberView(model);
const controller = new MutableNumberController(model, view);

// Add to DOM
document.body.appendChild(view.renderInitial());
