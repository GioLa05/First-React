import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import SecondSection from "@/components/Second Section/SecondSection";
import BrowseByCategory from "@/components/BrowseByCategory/BrowseByCategory";
import Products from "@/components/Products/Products";
import ProductsDisocunt from "@/components/ProductsDiscount/ProductsDiscount";
import Banner from "@/components/Banner/Banner";


export default function HomeRoute() {
  return (
    <div className={styles.page}>
      <Hero />
      <SecondSection />
      <BrowseByCategory />
      <Products />
      <ProductsDisocunt />
      <Banner />
    </div>
  );
}