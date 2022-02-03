import {Button, Card} from "react-bootstrap";
import fav from '../assets/images/favorites.png'

const StadiumCard = ({id,title,image,address,price}) => {
    return(
        <div className='col-xl-4 col-lg-6'>
            <Card className='mb-4'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {address}
                    </Card.Text>
                    <p className='text-right text-pink text-price'>{price} сом/час</p>
                    <div className="">
                        <Button variant="link" className='p-0'>
                            <img src={fav} alt="fav"/>
                        </Button>
                        <a href={id} className='text-pink text-more'>Подробнее ></a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default StadiumCard