import axios from "axios";
import { useEffect, useState } from "react";
import ProductTable from "./ProductTable";

const ProductTableController = () => {
    const [products,setProducts] = useState();
    const [error,setError] = useState();

    useEffect( () => {
        const fetchData = async () => {
            try {
              const response = await axios.get("https://dummyjson.com/products");
              setProducts(response.data.products);
            } catch (error) {
              setError(error);
            }
          };

          fetchData();
    },[]);

    const handleDeleteProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    }

    return <ProductTable products={products} error={error} handleDeleteProduct={handleDeleteProduct}/>
}

export default ProductTableController;