import ProductItem from './ProductItem';
import classes from './Products.module.css';
const dummyData = [
  {
    id : '1',
    price : 10,
    title : 'book 1',
    description : "This is a first product - amazing!"
  },
  {
    id : '2',
    price : 5,
    title : 'book 2',
    description : "This is a second product - amazing!"
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul >
        {dummyData.map(item => <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />)}
        
      </ul>
    </section>
  );
};

export default Products;
