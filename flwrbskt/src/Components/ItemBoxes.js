import {React, useEffect, useState} from 'react';
import {Grid, Paper} from '@material-ui/core';
import logo from '../Resources/FLWRBSKT_Logo.jpeg'
import hoodie from '../Resources/hoodie.jpeg'
import Ashwagandha from '../Resources/Ashwagandha.jpeg'




function ItemBox() {
  const [item, setItem] = useState(logo);
  const [name, setName] = useState("Logos");
 

  return (
    
    <h1>
      <div id="title">Products</div>
      <h2>
      <Grid container justifyContent="center" className={"stuff"} spacing={4}>
      <Grid item xs={5}><Paper><img src={item} alt={name} height="50%" width="50%" /></Paper></Grid>
      <Grid item xs={5}><Paper><img src={item} alt={name} height="50%" width="50%" /></Paper></Grid>
      </Grid>
      </h2>
    </h1>
          
  );
}

export default ItemBox;
