import "./App.css";
import About from "./component/about/about";
import Categories from "./component/categories/Categories";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";
import Hero from "./component/hero/Hero";
import Product from "./component/product/Product";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Product />
      <About />
      <Footer />
    </>
  );
}

export default App;
