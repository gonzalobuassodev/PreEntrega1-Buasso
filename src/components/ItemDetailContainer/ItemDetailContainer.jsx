import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { itemList } from '../../mocks/products.mock';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [cantidad, setCantidad] = useState(1);

  const [product, setProduct] = useState({});

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(itemList);
      }, 2000)
    ).then((data) => {
      if (id) {
        const productSelect = data.find((i) => i.id === id);
        setProduct(productSelect);
        // console.log(productSelect);
      } else {
        setProduct([]);
      }
    });
  }, [id]);

  const handleClickAdd = () => {
    if (cantidad < product.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleClickMinus = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <>
      {!product.id ? (
        <p>LOADING....</p>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component='img'
              height='240'
              image={product.img}
              alt='green iguana'
              sx={{ mt: 3 }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                sx={{ minHeight: 70 }}
              >
                {product.name}
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{ minHeight: 60 }}
              >
                {product.description}
              </Typography>
              <Typography
                variant='body3'
                color='text.secondary'
                sx={{ display: 'block', pt: 1 }}
              >
                Stock: {product.stock}
              </Typography>
            </CardContent>
            <CardActions sx={{ mb: 4 }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  <Button variant='contained' onClick={handleClickAdd}>
                    +
                  </Button>
                  <TextField
                    id='outlined-basic'
                    size='small'
                    variant='outlined'
                    value={cantidad}
                    sx={{ width: '61%' }}
                  />
                  <Button variant='contained' onClick={handleClickMinus}>
                    -
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant='contained'
                    onClick={handleClickMinus}
                  >
                    Agregar al Carrito
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Box>
      )}{' '}
    </>
  );
};

export default ItemDetailContainer;
