import { MutableNumberController } from './controllers/numberController.js';
import { MutableNumberModel } from './models/numberModel.js';
import { MutableNumberView } from './views/numberView.js';

//Create the instances
const model = new MutableNumberModel(0);
const view = new MutableNumberView(model);
const controller = new MutableNumberController(model, view);

// Add to DOM
document.body.appendChild(view.renderInitial());
