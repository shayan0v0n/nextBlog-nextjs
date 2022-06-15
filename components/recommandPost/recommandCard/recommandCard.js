import { Card } from 'react-bootstrap'
import Link from 'next/link'
import recommandCardStyle from './recommandCard.module.scss'

const recommandCard = props => {
    const { cardInfo } = props
    return (
        <Link href={`/blogs/${cardInfo.title}`}>
            <Card className={recommandCardStyle.recommandCard}>
                <Card.Img src={`/assets/imgs/blog${cardInfo.id}.png`} fluid />
                <Card.Body className={recommandCardStyle.recommandCardBody}>
                    <Card.Title>{ cardInfo.title }</Card.Title>
                    <Card.Text as="p">{ cardInfo.body }</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default recommandCard;