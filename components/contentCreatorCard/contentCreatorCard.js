import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const contentCreatorCard = item => {
    const createAddress = `${item["item"].address.country}، ${item["item"].address.city}، ${item["item"].address.street}، ${item["item"].address.alley}`;

  return (
      <Link href={`/content-creator/${item["item"].username}`}>
        <Card className="m-3" style={{ cursor: "pointer" }}>
            <Row className='p-3'>
                <Col md="4">
                    <Card.Img src={item["item"].avatar} className="w-25" />
                </Col>
                <Col md="6">
                    <Card.Title>نام: {item["item"].name}</Card.Title>
                    <Card.Text>ایمیل: {item["item"].email}</Card.Text>
                    <Card.Text as="a" className="p-0 m-0" style={{cursor: "pointer"}} href={item["item"].website}>پرتفولیو: {item["item"].website}</Card.Text>
                </Col>
                <Col md="2">
                    <Card.Text className="p-0 m-0">آدرس: {createAddress}</Card.Text>
                </Col>
            </Row>
        </Card>
      </Link>
  )
}

export default contentCreatorCard;