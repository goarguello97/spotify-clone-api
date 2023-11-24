import express from "express";
import auth from "./auth";
import playlist from "./playlist";
import artists from "./artists";
import albums from "./albums";
import tracks from "./tracks";
import checkAuth from "../middlewares/auth";

export default router = express.Router();

router.use("/", auth);
router.use("/playlists", checkAuth, playlist);
router.use("/artists", checkAuth, artists);
router.use("/albums", checkAuth, albums);
router.use("/tracks", checkAuth, tracks);
