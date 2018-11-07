'use strict';

import mongoose from 'mongoose';
require('mongoose-schema-jsonschema')(mongoose);

const categories = mongoose.Schema({
  name: { type:String, required:true },
  display_name: { type:String },
  description: { type:String },
});

export default mongoose.model('categories', categories);
