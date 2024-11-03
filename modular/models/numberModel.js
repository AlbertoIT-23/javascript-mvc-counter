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

export { MutableNumberModel };
