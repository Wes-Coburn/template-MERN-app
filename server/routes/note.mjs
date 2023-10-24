import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const notes_collection = "notes";
const router = express.Router();

// get all notes
router.get("/", async (_req, res) => {
  let collection = db.collection(notes_collection);
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// get note by id
router.get("/:id", async (req, res) => {
  let collection = db.collection(notes_collection);
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// create note
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  let collection = db.collection(notes_collection);
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// update note
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates =  {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level
    }
  };

  let collection = db.collection(notes_collection);
  let result = await collection.updateOne(query, updates);
  res.send(result).status(200);
});

// delete note
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection(notes_collection);
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;