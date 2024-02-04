const { Schema, model } = require("mongoose");

const songSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    artist: {
      type: String,
      require: true,
    },
    album: {
      type: String,
      require: true,
    },
    genre: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Song = model("Song", songSchema);

module.exports = Song;
