export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  // TODO: Implement your ArtPiece model methods here
  static add(newArtPieces) {
    newArtPieces.id = artPieces.length + 1;
    artPieces.push(newArtPieces);
    return newArtPieces;
  }

  static filter(year, artist) {
    const result = artPieces.filter((art) => {
      return (!year || year == art.year) && (!artist || artist == art.artist);
    });
    return result;
  }

  static get(id) {
    const artPiece = artPieces.find((art) => art.id == id);
    return artPiece;
  }

  static update(id, data) {
    const artPiece = artPieces.find((art) => art.id == id);
    if (!artPiece) {
      return null;
    }
    if (data.title) {
      artPiece.title = data.title;
    }
    if (data.imageUrl) {
      artPiece.imageUrl = data.imageUrl;
    }
    if (data.year) {
      artPiece.year = data.year;
    }
    if (data.artist) {
      artPiece.artist = data.artist;
    }
    return artPiece;
  }

  static delete(id) {
    const index = artPieces.findIndex((art) => art.id == id);
    if (index == -1) {
      return false;
    }
    artPieces.splice(index, 1);
    return true;
  }
}

const artPieces = [];
