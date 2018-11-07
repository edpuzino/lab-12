'use strict';

import mongoose from 'mongoose';
require('mongoose-schema-jsonschema')(mongoose);

const products = mongoose.Schema({
  category: { type:String, required:true },
  name: { type:String, required:true },
  display_name: { type:String },
  description: { type:String },
});

export default mongoose.model('products', products);