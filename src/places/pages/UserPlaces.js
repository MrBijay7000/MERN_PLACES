import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "BIJAY SHRESTHA",
    description: "KING",
    imageURL:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/449947758_122141471696251612_5050550299565308454_n.jpg?stp=c0.106.640.640a_dst-jpg_p640x640&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=8emf1HffrnUQ7kNvgEu17Xy&_nc_ht=scontent.fktm10-1.fna&oh=00_AYAml4aKNSVVJbMbH0IaFLOqDV7DnAE2Zum8r1T8Nml3Kw&oe=6693BC90",
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
      "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/450808282_494607879609866_5996737750253051273_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ONPIdQ13BiEQ7kNvgGXPaPK&_nc_ht=scontent.fktm7-1.fna&oh=00_AYAKlD3_5zpHbt_kHx8t6cUmlfa-XJHjZzsNqNPtPm4kig&oe=6697A79B",
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
