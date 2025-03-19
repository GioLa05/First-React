"use client";

import { useEffect, useState } from "react";
import styles from "./Products.module.css";

type Product = {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
};

const Products = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const handleBuyNow = (product: Product) => {
    const existingCart: Product[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingProduct = existingCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    console.log("Current cart contents:", existingCart);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.products}>
      <div className={styles.productsTags}>
        <div className={styles.tag}>
          <p>New Arrival</p>
          <div className={styles.line}></div>
        </div>
        <div className={styles.tag2}>
          <p>Bestseller</p>
        </div>
        <div className={styles.tag2}>
          <p>Featured Products</p>
        </div>
      </div>
      <div className={styles.cards}>
        {data.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.favoriteBtn}>
              <img
                src="/assets/icons/Favorite_duotone.svg"
                alt="Favorite_duotone"
              />
            </div>
            <div className={styles.iphone}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.infoBuy}>
              <div className={styles.info}>
                <p>{product.name}</p>
                <p className={styles.price}>${product.price}</p>
              </div>
              <div className={styles.buyNow}>
                <button onClick={() => handleBuyNow(product)}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
