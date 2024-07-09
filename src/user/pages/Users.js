import React from "react";
import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "BIJAY SHRESTHA",
      image:
        "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/449826554_462731056628373_3667392310076929272_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hX-mN6TC0D0Q7kNvgE7dqYB&_nc_ht=scontent.fktm10-1.fna&oh=00_AYAjJYnIZQH3Pr7IrlDzTju5IeSmg26mg4sC0Y5BhU-wgw&oe=6692C103",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}
