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

export { MutableNumberController };
