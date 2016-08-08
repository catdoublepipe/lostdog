const mongoose = require('mongoose');
const commentSchema = require('./commentSchema');

const dogSchema = {
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 50
  },
  breed: {
    type: String,
    required: true
  },
  comments: [commentSchema],
  description: {
    type: String
  },
  lost: {
    type: Boolean,
    "default": true
  },
  lastSeenDate: {
    type: Date,
    required: true
  },
  lastSeenCoords: {
    type: [Number],
    index: '2dsphere'
  },
  name: {
    type: String,
    required: true
  },
  pictures: [{
    type: String,
    //match: /^http:\/\//i,
    required: true
  }],
  summary: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }]
};
