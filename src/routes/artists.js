import express from "express";
import ArtistsController from "../controllers/artists";

export default artistsRouter = express.Router();

artistsRouter.get("/", ArtistsController.getAll);
artistsRouter.get("/:id", ArtistsController.getSingle);
artistsRouter.put("/", ArtistsController.followArtist);
