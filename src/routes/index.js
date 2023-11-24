import express from "express";
import auth from "./auth.js";
import playlist from "./playlist.js";
import artists from "./artists.js";
import albums from "./albums.js";
import tracks from "./tracks.js";
import checkAuth from "../middlewares/auth.js";

const router = express.Router();

router.use("/", auth);
router.use("/playlists", checkAuth, playlist);
router.use("/artists", checkAuth, artists);
router.use("/albums", checkAuth, albums);
router.use("/tracks", checkAuth, tracks);

export default router;
