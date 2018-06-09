import {ModelType} from "../../model/types/ModelType";

export type ModelNotInitializedErrorOptions = { cause: string } | { accessedPropertyKey: string };

export class ModelNotInitializedError extends Error {

  message: string;

  constructor(modelClass: ModelType<any>,
              options: ModelNotInitializedErrorOptions) {
    /* istanbul ignore next */
    super();
    let cause = options['cause'];
    if (!('cause' in options)) {
      cause = `before "${options['accessedPropertyKey']}" can be called.`;
    }
    this.message = `Model not initialized: "${modelClass.name}" ` +
      `needs to be added to a Sequelize instance ${cause}`;
  }
}