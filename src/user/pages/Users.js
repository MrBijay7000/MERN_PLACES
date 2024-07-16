import React from "react";
import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "BIJAY SHRESTHA",
      image:
        "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/449768782_122154067604093808_893828229689077505_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Wo1u3dKrt2oQ7kNvgEDc12I&_nc_ht=scontent.fktm7-1.fna&oh=00_AYBXeVEmIYb-sjcxqZO0gQh1kLy3j6LRE8lmtzAmEXP9WQ&oe=66996836",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}
