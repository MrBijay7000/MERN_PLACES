import React from "react";
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
      "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/450226955_122141471498251612_6649273566873597511_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VwqeMg0YFyQQ7kNvgFioRrk&_nc_ht=scontent.fktm7-1.fna&oh=00_AYA9JOg05ub8iwmjXA7SVn7jZp5yBM-APy6GnCOTqFw8vw&oe=6693E849",
    address: "NEPAL",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

export default function UserPlaces() {
  return <PlaceList items={DUMMY_PLACES} />;
}
