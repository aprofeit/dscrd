import React, { useState } from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

const Home = () => {
  const [vanityUrl, setVanityUrl] = useState("");

  return (
    <Container>
      <Row>
        <Col>
        <h1 className="mt-4">Make discord URLS great again</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="vanity_url">
              <Form.Label>Desired vanity URL</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>https://dscrd.profeit.com/r/</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="whatever-you-want"
                  name="vanity_url"
                  value={vanityUrl}
                  onChange={(_e, value) => { setVanityUrl(value) }}
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
