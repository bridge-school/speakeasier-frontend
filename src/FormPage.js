import React from "react";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import Form from "./Form";

const FormPage = () => {
  return (
    <Container maxWidth="md">
      <Header buttonText="Back To Conferences" path="/" />
      <h1>Form</h1>
      <Form />
    </Container>
  );
};

export default FormPage;