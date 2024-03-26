// TODO: require your ArtPiece model here
import ArtPiece from "./artPiece.model.js";

// TODO: Implement your artPieces controller functions here
export const add = (req, res) => {
  const { title, artist, year, imageUrl } = req.body;
  const newArtPieces = {
    title,
    artist,
    year,
    imageUrl,
  };
  const artPiece = ArtPiece.add(newArtPieces);
  res.status(201).send(artPiece);
};

export const filter = (req, res) => {
  const year = req.query.year;
  const artist = req.query.artist;
  const artPieces = ArtPiece.filter(year, artist);
  res.status(200).send(artPieces);
};

export const get = (req, res) => {
  const id = req.params.id;
  const artPiece = ArtPiece.get(id);
  if (!artPiece) {
    return res.status(404).send("Art piece not found");
  }
  res.status(200).send(artPiece);
};

export const update = (req, res) => {
  const id = req.params.id;
  const updatedData = ArtPiece.update(id, req.body);
  if (!updatedData) {
    return res.status(404).send("Art piece not found");
  }
  res.status(200).send(updatedData);
};

export const deleteA = (req, res) => {
  const id = req.params.id;
  const result = ArtPiece.delete(id);
  if (!result) {
    return res.status(404).send("Art piece not found");
  }
  res.status(200).send({ message: "Deleted successfully" });
};
