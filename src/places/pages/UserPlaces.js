import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "BIJAY SHRESTHA",
    description: "KING",
    imageURL:
      "https://pbs.twimg.com/media/GTB-a0hWoAAGMKI?format=jpg&name=large",
    address: "BALKOT",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "SHRESTHA SHRESTHA",
    description: "KING KING",
    imageURL:
      "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/451430546_122143491494251612_6536141516611797437_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=z0Q_iEmyEhUQ7kNvgETGj3R&_nc_ht=scontent.fktm7-1.fna&oh=00_AYCSjcH3kI5WcbD2GVfmQNRAXoVnwDR6C7PaJzUq566xIw&oe=669DCE4C",
    address: "NEPAL",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

export default function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
}
