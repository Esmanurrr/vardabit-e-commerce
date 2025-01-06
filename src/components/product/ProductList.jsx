import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../../service/apiProduct";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts(); // Promise'in çözülmesini bekler
        setProducts(data);
      } catch (error) {
        console.error("Ürünleri çekerken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imgUrl={product.imgUrl}
          price={product.price}
          name={product.name}
        />
      ))}
    </div>
  );
}

export default ProductList;
