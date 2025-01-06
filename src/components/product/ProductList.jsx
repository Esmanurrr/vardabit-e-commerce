import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../../service/apiProduct";
import { useSelector } from "react-redux";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { sort, brands, models } = useSelector((state) => state.filter);
  const searchQuery = useSelector((state) => state.search.query);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = await getProducts();
        let filteredProducts = allProducts;

        if (sort) {
          switch (sort) {
            case "oldToNew":
              filteredProducts = filteredProducts.sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
              );
              break;
            case "newToOld":
              filteredProducts = filteredProducts.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
              );
              break;
            case "priceHighToLow":
              filteredProducts = filteredProducts.sort(
                (a, b) => b.price - a.price
              );
              break;
            case "priceLowToHigh":
              filteredProducts = filteredProducts.sort(
                (a, b) => a.price - b.price
              );
              break;
            default:
              break;
          }
        }
        if (brands.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            brands.includes(product.brand)
          );
        }
        if (models.length > 0) {
          filteredProducts = filteredProducts.filter((product) =>
            models.includes(product.model)
          );
        }
        if (searchQuery) {
          filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Ürünleri çekerken hata oluştu:", error);
      }
    };

    fetchData();
  }, [sort, brands, models, searchQuery]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
