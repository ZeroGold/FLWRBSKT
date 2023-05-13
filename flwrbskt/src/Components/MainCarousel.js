import { Typography } from '@mui/material';
import React, {useState} from 'react'
import logo from '../Resources/FLWRBSKT_Logo.jpeg'
import hoodie from '../Resources/hoodie.jpeg'
import Carousel from 'react-material-ui-carousel';
import Ashwagandha from '../Resources/Ashwagandha.jpeg'
import CarouselItem from './CarouselItem';

const MainCarousel = ({}) => {
const [items, setItems] = useState([{
    name: "home",
    image: logo,
    link: "/",
},
{
    name: "clothing",
    image: hoodie,
    link: "/products"
},
{
    name: "supplements",
    image: Ashwagandha,
    link: "/products"
}
])
    return (
        <Carousel>
            {items.map((item, i) => (
                <CarouselItem key={i} {...item} />
            ))}
            </Carousel>
    );
}
export default MainCarousel;