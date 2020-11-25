import React, { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import { listProducts } from "../graphql/queries";
import styles from "../styles/Home.module.css";
import { Header, ProductCard } from "../components";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const productsObj = await API.graphql({ query: listProducts });
    const productsList = productsObj.data.listProducts.items;
    let updatedProcducts = [];
    for (let i = 0; i < productsList.length; i++) {
      let image = await Storage.get(productsList[i].image);
      updatedProcducts.push({ ...productsList[i], image });
    }
    setProducts(updatedProcducts);
  }

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.products_row}>
        {products.map((product) => (
          <ProductCard
            id={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}

        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          description="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://material-ui.com/static/images/cards/paella.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          description="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          description="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          description="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          description="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          description="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          description="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
      </div>
    </div>
  );
}
