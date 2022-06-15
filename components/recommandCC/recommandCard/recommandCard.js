import React from 'react';
import { Card } from 'react-bootstrap'
import Link from 'next/link'
import recommandCardStyle from './recommandCard.module.scss';

const recommandCard = props => {
    const {cardData} = props;
    const createAddress = `${cardData.address.country}، ${cardData.address.city}، ${cardData.address.street}، ${cardData.address.alley}`;
    return (
        <Link href={`/content-creator/${cardData.username}`}>
            <Card className={recommandCardStyle.recommandCard}>
                <Card.Img src={cardData.avatar} fluid className="mb-2" />
                <Card.Body className={recommandCardStyle.recommandCardBody}>
                    <Card.Title> نام کامل: {cardData.name}</Card.Title>
                    <Card.Text className="p-0 m-0">آدرس: {createAddress}</Card.Text>
                    <div>
                        <Card.Text className="p-0 m-0">ایمیل: {cardData.email}</Card.Text>
                        <Card.Text className="p-0 m-0">پرتفولیو: {cardData.website}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default recommandCard