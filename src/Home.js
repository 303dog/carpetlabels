import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={process.env.PUBLIC_URL + '/grey pattern.jpg'}
          alt=""
        />
        <div className="home__row">
          <Product
            id="0001"
            title="100 pk | Full Color Carpet Labels"
            price={489.99}
            rating={5}
            image={process.env.PUBLIC_URL + './custom.jpg'}
          />
          <Product
            id="0002"
            title="100 pk | Full Color Carpet Labels"
            price={489.99}
            rating={5}
            image={process.env.PUBLIC_URL + './label-1419931.jpg'}
          />
          <Product
            id="0003"
            title="100 pk | B & W Carpet Labels"
            price={389.99}
            rating={4}
            image={process.env.PUBLIC_URL + './flat-iron-1421572.jpg'}
          />
        </div>

        <div className="home__row">
          <Product
            id="0004"
            title="Full Color Carpet Label w| custom option | cost per each"
            price={5.99}
            rating={3}
            image={process.env.PUBLIC_URL + './made in USA.jpg'}
          />
          <Product
            id="0005"
            title="B & W Carpet Label | cost per each"
            price={3.99}
            rating={5}
            image={process.env.PUBLIC_URL + './ABCD blocks.jpg'}
          />
          <Product
            id="0006"
            title="Full Color Carpet Labels | cost per each"
            price={4.99}
            rating={4}
            image={process.env.PUBLIC_URL + './carpetRoll.jfif'}
          />
        </div>

        <div className="home__row">
          <Product
            id="0007"
            title="1000 pk | Any style | No mix and match"
            price={1200.00}
            rating={4}
            image={process.env.PUBLIC_URL + './grey pattern.jpg'}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
