import express from "express";
const router = express.Router();

// TODO: require your artPiecesController here
import { add, filter, get, update, deleteA } from "./artPiece.controller.js";

// TODO: Implement your artPieces routes here
router.get("/", filter);
router.post("/", add);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", deleteA);
export default router;
