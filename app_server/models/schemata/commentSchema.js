const mongoose = require('mongoose');

const commentSchema = {
  author: {
    type: String
  },
  comment: {
    type: String
  },
  timestamp: {
    type: Date,
    "default": Date.now
  }
};
