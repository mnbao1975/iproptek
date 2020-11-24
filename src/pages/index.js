import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header, ProductCard } from "../components";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.products_row}>
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          descrpition="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://material-ui.com/static/images/cards/paella.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          descrpition="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          descrpition="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          descrpition="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          descrpition="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          descrpition="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
        <ProductCard
          title="Courtesy of Yuko Simms of SELLER DIRECT REAL ESTATE"
          descrpition="3 bed•3 bath•1401 sqft•Built in 2016"
          image="https://photos.zolo.ca/55-mcintosh-street-toronto-E4997145-1-p480.jpg"
          price={9000}
        />
      </div>
    </div>
  );
}
