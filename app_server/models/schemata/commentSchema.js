const mongoose = require('mongoose');

const commentSchema = {
  author: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    "default": Date.now,
    required: true
  }
};
