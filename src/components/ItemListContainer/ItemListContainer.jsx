import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList';

import { itemList } from '../../mocks/products.mock';

const ItemListContainer = () => {
  const { category } = useParams();
  // console.log(category);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(itemList);
      }, 2000)
    ).then((data) => {
      if (category) {
        const categories = data.filter(
          (product) => product.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) <p>Loading...</p>;

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
