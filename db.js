module.exports = () => {
  const data = {
    products: []
  };
  for (let i=0; i < 100; i++) {
    data.products.push({
      id: i,
      name: `Product Nº ${i}`,
      image: 'http://lorempixel.com/100/150/animals/',
      price: `$ ${i*10}.00`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    });
  };
  return data;
}