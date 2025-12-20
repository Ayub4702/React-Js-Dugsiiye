import { useState } from "react";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddProduct = () => {
    if (productName.trim() !== "" && productPrice.trim() !== "") {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1,
      };

      setProducts([...products, newProduct]);
      setProductName("");
      setProductPrice("");
    }
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const increaseQuantity = (id) => {
    const updatedProduct = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    setProducts(updatedProduct);
  };

  const disIncreaseQuantity = (id) => {
    const updatedProduct = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );

    setProducts(updatedProduct);
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h2>Simple Shopping Cart</h2>
      <h2>Add a product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="number"
        min="0"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add to cart</button>

      {products.length > 0 ? (
        <div>
          <h2>products in cart</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                <div>
                  Quantity:
                  <button onClick={() => disIncreaseQuantity(product.id)}>
                    -
                  </button>
                  {product.quantity}
                  <button onClick={() => increaseQuantity(product.id)}>
                    +
                  </button>
                </div>
                <button onClick={() => removeProduct(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2>Total price: {totalPrice} </h2>
        </div>
      ) : (
        <p>this cart is empty</p>
      )}
    </div>
  );
};

export default ShoppingCart;
