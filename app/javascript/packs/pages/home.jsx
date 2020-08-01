import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

const Home = () => {
  const [vanityUrl, setVanityUrl] = useState("");
  const [destinationUrl, setDestinationUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMessages, setErrorMessages] = useState("")
  const [newLink, setNewLink] = useState(null)
  const [buttonText, setButtonText] = useState('Create')

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitting(true)
    axios.post('/api/redirects', {
      redirect: {
        vanity_url: vanityUrl,
        destination_url: destinationUrl
      }
    }).then((response) =>  {
      setNewLink(response.data.redirect.vanity_url)
      setErrorMessages(null)
      setButtonText('Done')
    }).catch((e) => {
      console.log(e)
      setErrorMessages(e.response.data.errors)

      setSubmitting(false)
    })
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
                  value = { vanityUrl }
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
                  value = {destinationUrl}
                  onChange={e => {
                    const newValue = e.target.value
                    setDestinationUrl(newValue) 
                 }}
                />
              </InputGroup>
            </Form.Group>
            <Button
              variant="primary" 
              type="submit"
              disabled={submitting}
              onClick={handleSubmit}
              className="mt-2"
             >
              { buttonText }
            </Button>
            <span className="ml-3 text-warning">
              {errorMessages}
            </span>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="mt-3">{newLink && `Here's your lovely link: ${newLink}`}</h2>
        </Col>
      </Row>
     
    </Container>
  )
}

export default Home
