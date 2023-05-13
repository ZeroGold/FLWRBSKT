import React from 'react'
import { Paper, Button } from '@mui/material'
import { Outlet, Link } from 'react-router-dom'

const CarouselItem = ({name, image, link}) => {
    return (
        <Paper>
            <img src={image} alt={name} height="50%" width="100%" />
            <h2>{name}</h2>
            <Link to={link}><Button>View {name}</Button></Link>
        </Paper>
    )
}
export default CarouselItem;