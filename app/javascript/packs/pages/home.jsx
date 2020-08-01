import React, { useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

const Home = () => {
  const [vanityUrl, setVanityUrl] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(vanityUrl)
    console.log(destinationUrl)
  }

  return (
    <Container>
      <Row>
        <Col>
        <h1 className="mt-4">Shorten your discord link</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="vanity_url">
              <Form.Label>Desired vanity URL</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>https://dscrd.profeit.com/r/</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="whatever-you-want"
                  name="redirect[vanity_url]"
                  onChange={e => {
                    const newValue = e.target.value
                    setVanityUrl(newValue)
                  }}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="destination_url">
              <Form.Label>Destination URL</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>https://discord.gg/</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="redirect[destination_url]"
                  onChange={e => {
                    const newValue = e.target.value
                    setDestinationUrl(newValue) 
                 }}
                />
              </InputGroup>
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
