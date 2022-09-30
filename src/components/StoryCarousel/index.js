import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteStory } from "../../store/user/actions";

export default function StoryCarousel(props) {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    console.log("deleting story!", id);
    dispatch(deleteStory(id));
  };
  return (
    <Carousel className='mt-5'>
      {props.space.stories.map((story) => {
        return (
          <Carousel.Item key={story.id}>
            {story.imageUrl && (
              <img
                className='d-block w-100'
                src={story.imageUrl}
                alt={story.name}
              />
            )}
            <Carousel.Caption
              style={{
                backgroundColor: `${props.space.backgroundColor}99`,
                color: props.space.color,
              }}
              className='p-5'
            >
              <h3>{story.name}</h3>
              <p>{story.content}</p>
              {props.owner && (
                <Button variant='danger' onClick={() => onDelete(story.id)}>
                  Delete story
                </Button>
              )}
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
