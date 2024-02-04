const Song = require("../model/song");

exports.getAllSong = async (req, res) => {
  try {
    const song = await Song.find();

    if (Song.length === 0)
      return res
        .status(404)
        .json({ success: false, message: "No song is found" });

    res.status(200).json({
      success: true,
      message: "All song",
      song,
      count: song.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.getSong = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const song = await Song.findOne(id);

    if (!song)
      return res
        .status(404)
        .json({ success: false, message: "Song is not found" });

    res.status(200).json({ success: true, message: "Song is found", song });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.createSong = async (req, res) => {
  try {
    const song = await req.body;
    const created = await Song.create(song);

    if (!created)
      return res.status(400).json({
        success: false,
        message: "Song creation failed",
      });

    res.status(200).json({
      success: true,
      message: "Song created successfully",
      song: created,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.updateSong = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const song = await req.body;
    const update = await Song.findOneAndUpdate(id, song, { new: true });

    if (!update)
      return res.status(400).json({
        success: false,
        message: "song is not updated",
      });

    res.status(200).json({
      success: true,
      message: `Song ${id._id} updated successfully`,
      song: update,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.deleteSong = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const deleted = await Song.findByIdAndRemove(id);

    if (!deleted)
      return res.status(400).json({
        success: false,
        message: "Song is not deleted",
      });

    res.status(200).json({
      success: true,
      message: `Song ${id._id} deleted successfully`,
      song: deleted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
