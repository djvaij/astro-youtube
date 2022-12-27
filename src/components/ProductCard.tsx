import { useState } from 'react';
import { IProduct } from './../types';

interface ProductsCardProps {
  product: IProduct
}

export default function ProductsCard({ product }: ProductsCardProps) {
  const [showDescription, setShowDescription] = useState(false);

  const toggle = () => {
    setShowDescription((state) => !state);
  };

  return (
    <div className="border rounded mb-2 p-3">
      <h2 className="text-lg">{product.title}</h2>
      <p className="font-bold">{product.price}</p>

      <a href={`/product/${product.id}`}>Open product</a>

      <br />

      <button
        onClick={toggle}
        className="border py-2 px-4 bg-yellow-400 text-white"
      >
        Toggle Description
      </button>

      {showDescription && <p className="mb-2">{product.description}</p>}
      <p className="font-mono">{product.category}</p>
    </div>
  );
};
