// const uuid = require("uuid/v4");
const { v4: uuidv4 } = require("uuid");
const HttpError = require("../models/http-error");

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "BIJAY SHRESTHA",
    description: "KING OF THE WORLD",
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: "BALKOT",
    creator: "u1",
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }

  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    throw new Error("Could not find a place for the provided user id.", 404);
  }

  res.json({ place });
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;
  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  console.log({ createdPlace });

  DUMMY_PLACES.push(createdPlace);

  res.status(201).json({ place: createdPlace });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
