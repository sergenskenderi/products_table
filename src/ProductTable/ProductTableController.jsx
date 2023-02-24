import { useEffect, useState } from "react";
import { fetchData } from "../api";
import ProductTable from "./ProductTable";

const ProductTableController = () => {
    const [products,setProducts] = useState();
    const [error,setError] = useState();

    useEffect( () => {
        fetchData("/products").then((response) => setProducts(response.data.products)).catch((error) => setError(error));
    },[]);

    const handleDeleteProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    }

    return <ProductTable products={products} error={error} handleDeleteProduct={handleDeleteProduct}/>
}

export default ProductTableController;