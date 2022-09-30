import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectUser,
  selectToken,
  selectMySpace,
} from "../../store/user/selectors";
import Container from "react-bootstrap/Container";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MySpaceForm from "./MySpaceForm";
import StoryForm from "./StoryForm";
import Space from "../../components/Space";
import StoryCarousel from "../../components/StoryCarousel";

export default function MySpace() {
  const profile = useSelector(selectUser);
  const token = useSelector(selectToken);
  const space = useSelector(selectMySpace);
  const [editMode, setEditMode] = useState(false);
  const [postStoryMode, setpostStoryMode] = useState(false);
  const navigate = useNavigate();

  if (token === null) {
    navigate("/");
  }

  if (space === null) {
    return <Loading />;
  }

  const displayButtons = profile?.id === space.userId;

  return (
    <>
      <Space
        id={space.id}
        title={space.title}
        description={space.description}
        backgroundColor={space.backgroundColor}
        color={space.color}
        showLink={false}
      />
      <Container>
        {displayButtons ? (
          <Card>
            <Button onClick={() => setEditMode(!editMode)}>
              {editMode ? "Close" : "Edit my space"}
            </Button>
            <Button
              onClick={() => setpostStoryMode(!postStoryMode)}
              className="mt-2"
            >
              {postStoryMode ? "Close" : "Post a cool story bro"}
            </Button>
          </Card>
        ) : null}

        {editMode && (
          <Card>
            <MySpaceForm />
          </Card>
        )}

        {postStoryMode && (
          <Card>
            <StoryForm />
          </Card>
        )}

        <StoryCarousel owner space={space} />
      </Container>
    </>
  );
}
