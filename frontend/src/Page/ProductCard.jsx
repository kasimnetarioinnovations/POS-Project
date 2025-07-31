import React from 'react'
import Card from '../components/card/Card';
import product1 from "../assets/Image/product1.png";
import product2 from "../assets/Image/product2.png";
import product3 from "../assets/Image/product3.png";
import product4 from "../assets/Image/product4.png";
import product5 from "../assets/Image/product5.png";
import product6 from "../assets/Image/product6.png";
import product7 from "../assets/Image/product7.png";
// import product8 from "../assets/Image/product8.png";
import "./ProductCard.css";
import { useSearch } from "../SearchContext"; // 👈 import context


const ProductCard = () => {
  const { searchTerm } = useSearch(); // 👈 get search value
   const fakeProducts = [
  {
    id: 1,
    name: "iPhone 14",
    category: "Mobiles",
    price: 15800,
    image: product1
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    category: "Headphone",
    price: 12900,
    image: product2
  },
  {
    id: 3,
    name: "OnePlus 9",
    category: "Shoes",
    price: 13999,
    image: product3
  },
  {
    id: 4,
    name: "Vivo V23",
    category: "Mobiles",
    price: 10999,
    image: product4
  },
  {
    id: 5,
    name: "Redmi Note 12",
    category: "Watch",
    price: 8999,
    image: product5
  },
  {
    id: 6,
    name: "Realme Narzo 50",
    category: "Mobiles",
    price: 9999,
    image: product6
  },
  {
    id: 7,
    name: "Google Pixel 6a",
    category: "Mobiles",
    price: 19900,
    image: product7
  },
   {
    id: 7,
    name: "Google Pixel 6a",
    category: "Mobiles",
    price: 19900,
    image: product7
  },
   {
    id: 7,
    name: "Google Pixel 6a",
    category: "Mobiles",
    price: 19900,
    image: product7
  },
   {
    id: 6,
    name: "Realme Narzo 50",
    category: "Laptop",
    price: 9999,
    image: product6
  },
//   {
//     id: 8,
//     name: "iPhone 13 Mini",
//     category: "Mobiles",
//     price: 17800,
//     image: product8
//   }
{
    id: 7,
    name: "Google Pixel 6a",
    category: "Earbuds",
    price: 19900,
    image: product7
  },
];
  // 🔍 Filter products by exact full name (case-insensitive)
  const filteredProducts = fakeProducts.filter((product) =>
    searchTerm.trim() === ''
      ? true
      : product.name.toLowerCase() === searchTerm.trim().toLowerCase()
  );



  return (
   <div className="productcard-container py-3" style={{ display: "grid", gridTemplateColumns: "repeat(5, 0fr)", gap: "12px", flexWrap: "wrap" }}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => <Card key={item.id} product={item} />)
      ) : (
        <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "20px", color: "gray" }}>
          No Products Found
        </div>
      )}
    </div>
  )
}

export default ProductCard