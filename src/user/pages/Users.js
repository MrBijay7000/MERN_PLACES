import React from "react";
import UsersList from "../components/UsersList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "BIJAY SHRESTHA",
      image:
        "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/451714283_122143963214251612_354609968001981056_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WocZdH1RgmwQ7kNvgEyAPqU&_nc_ht=scontent.fktm10-1.fna&oh=00_AYB2Kc7L5Ni4mDTPhWbbvlUPt1qKYlFrSdcrBuc_c4fZoA&oe=669FA09A",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}
