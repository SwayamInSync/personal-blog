const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      requried: true,
    },
    desc: {
      type: String,
      requried: true,
    },
    photo: {
      type: String,
      requried: false,
    },
    username: {
      type: String,
      requried: true,
    },
    categories: {
      type: Array,
      requried: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", PostSchema);
