import express from "express";
import PlaylistsController from "../controllers/playlists.js";

const playlistRouter = express.Router();

playlistRouter.get("/", PlaylistsController.getAll);
playlistRouter.get("/:id", PlaylistsController.getSingle);
playlistRouter.post("/", PlaylistsController.createPublicPlaylist);
playlistRouter.post("/:id/tracks", PlaylistsController.addTrackToPlaylist);
playlistRouter.delete(
  "/:id/tracks/:uri",
  PlaylistsController.removeTrackFromPlaylist
);
playlistRouter.put("/:id", PlaylistsController.updatePlaylist);

export default playlistRouter