import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";

import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "BIJAY SHRESTHA",
    description: "KING",
    imageURL:
      "https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/364678778_602002642100138_8441079337775033004_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=YaVYTKd-y68Q7kNvgHUBJXM&_nc_ht=scontent.fktm7-1.fna&oh=00_AYCrlDqWHE9Ya_2DfRfoIih3rEHtHLOgADVqS5BlVHqKLA&oe=669C4A81",
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

export default function UpdatePlace() {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
}
