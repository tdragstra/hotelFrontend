import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useDispatch } from "react-redux";
import { postStory } from "../../store/user/actions";

export default function MySpaceForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://source.unsplash.com/1600x900/?"
  );

  function submitForm(event) {
    event.preventDefault();

    // console.log(name, content, imageUrl);
    dispatch(postStory(name, content, imageUrl));
  }
  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">Post a cool story bro</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={event => setName(event.target.value)}
          type="text"
          placeholder="Name of your story"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          value={content}
          onChange={event => setContent(event.target.value)}
          type="text"
          placeholder="Tell us what happened"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image url</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={event => setImageUrl(event.target.value)}
          type="text"
          placeholder="A picture says more than 1000 words"
        />
        {imageUrl ? (
          <Col className="mt-4" md={{ span: 8, offset: 2 }}>
            <Image src={imageUrl} alt="preview" thumbnail />
          </Col>
        ) : null}
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={submitForm}>
          Post!
        </Button>
      </Form.Group>
    </Form>
  );
}
