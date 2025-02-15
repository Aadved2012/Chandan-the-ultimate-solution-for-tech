import React from 'react'
import {Card, Button, Container} from 'react-bootstrap'
import './Products.css'

import vivo from "../images/vivo.png"
import oppo from "../images/oppo.jpg"
import mobilephones from "../images/mobilephones.webp"
import smartTvs from "../images/smart-tvs.png"
import smartwatches from "../images/smartwatches.webp"
import laptops from "../images/laptops.webp"
import printers from "../images/printers.jpg"
import accessories from "../images/accessories.webp"

const Products = () => {
    return (
        <div className='products-container' id="products">
            <h2 id="products-subtitle">Products</h2>
            <Container className='card-flex'>
            <Card style={{ width: '18rem' }} className="card-flex-item">
                <Card.Img variant="top" src={mobilephones} className="card-flex-item-img" />
                <Card.Body>
                    <Card.Title className='card-flex-item-title'>Mobile Phones</Card.Title>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="card-flex-item">
                <Card.Img variant="top" src={smartTvs} className="card-flex-item-img" />
                <Card.Body>
                    <Card.Title className='card-flex-item-title'>Smart TVs</Card.Title>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="card-flex-item">
                <Card.Img variant="top" src={smartwatches} />
                <Card.Body>
                    <Card.Title className='card-flex-item-title'>Smartwatches</Card.Title>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="card-flex-item">
                <Card.Img variant="top" src={laptops} className="card-flex-item-img" />
                <Card.Body>
                    <Card.Title className='card-flex-item-title'>Laptops</Card.Title>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="card-flex-item">
                <Card.Img variant="top" src={printers} className="card-flex-item-img" />
                <Card.Body>
                    <Card.Title className='card-flex-item-title'>Printers</Card.Title>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="card-flex-item">
                <Card.Img variant="top" src={accessories} className="card-flex-item-img" />
                <Card.Body>
                    <Card.Title className='card-flex-item-title'>Accessories</Card.Title>
                </Card.Body>
            </Card>

            </Container>
        </div>
    )
}

export default Products