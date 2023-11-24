import express from "express";
import AlbumsController from "../controllers/albums.js";

const albumsRouter = express.Router();

albumsRouter.get("/", AlbumsController.getAll);
albumsRouter.get("/:id", AlbumsController.getSingle);
albumsRouter.put("/", AlbumsController.saveAlbum);

export default albumsRouter