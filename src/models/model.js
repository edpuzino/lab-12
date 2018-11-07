'use strict';

import Storage from '../lib/storage/storage.js';

class Model {

  constructor(schema) {
    this.schema = schema;
    this.storage = new Storage(schema);
  }

  find(query) {
    return this.storage.find(query);
  }

  save(data) {
    return this.storage.save(data);
  }

  delete(id) {
    return this.storage.delete(id);
  }

  put(data) {
    return this.storage.save(data);
  }

  patch(id, data) {
    data._id = id;
    return this.storage.save(data);
  }

}

export default Model;