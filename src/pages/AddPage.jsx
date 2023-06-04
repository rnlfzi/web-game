import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

const AddPage = () => {
  const [file, setFile] = useState(null);
  const upload = async () => {
    try {
      const imageRef = ref(storage, `files/img/${file.name}`);
      const res = await uploadBytes(imageRef, file);
      const url = await getDownloadURL(res.ref);

      console.log(url)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  return (
    <Container>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control type="file" onChange={handleChange} />
      </Form.Group>
      <Button onClick={upload}>
        submit
      </Button>
    </Container>
  );
};

export default AddPage;
