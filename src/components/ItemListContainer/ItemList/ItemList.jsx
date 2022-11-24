import React from 'react';
import Item from '../Item/Item';
import { Box } from '@mui/material';
const ItemList = ({ products }) => {
  return (
    <ul>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          mt: 7,
        }}
      >
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </Box>
    </ul>
  );
};

export default ItemList;
