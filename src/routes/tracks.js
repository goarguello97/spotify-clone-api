import express from "express";
import TracksController from "../controllers/tracks";

export default tracksRouter = express.Router();

tracksRouter.get("/:id", TracksController.getTrack);
tracksRouter.get("/search", TracksController.search);
tracksRouter.put("/", TracksController.addTrackToFavs);
tracksRouter.delete("/", TracksController.removeTrackFromFavs);
