import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
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
      <CardActions sx={{ justifyContent: 'center', mb: 4 }}>
        <Button size='small' variant='contained'>
          <Link to={`/item/${product.id}`}>Comprar</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
