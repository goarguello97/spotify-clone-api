import express from "express";
import AlbumsController from "../controllers/albums";

export default albumsRouter = express.Router();

albumsRouter.get("/", AlbumsController.getAll);
albumsRouter.get("/:id", AlbumsController.getSingle);
albumsRouter.put("/", AlbumsController.saveAlbum);
