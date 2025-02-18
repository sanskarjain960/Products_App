import ProductCard from "@/components/ui/ProdCard"
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProd } from "@/redux/productSlice";
import axios from "axios";
// import { ThemeToggle } from "@/components/ui/ThemeToggle";
import EmptyState from "@/components/ui/Empty";


function Home() {
  const dispatch = useDispatch()

  useEffect(()=>{

    const fetchProducts =  async () =>{
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
      console.log(response.data);
      dispatch(setProd(response.data.data))
    }

    fetchProducts()

  },[dispatch]
  )
  

  const products = useSelector((state) => {
    // console.log("Redux State:", state); // Debug: Log the entire state
    return state.product.products; // Access the nested `products` array
  });

  if(products.length == 0){
    return <EmptyState></EmptyState>
  }

  return (
    <>
    <h1 className="text-3xl font-bold text-blue-600 text-center pt-7">Current Products</h1>
    <div className=" flex flex-wrap mt-2 gap-12 p-10 justify-center">
    {products.map((product) => (
            <ProductCard key = {product._id} prodName = {product.name} img = {product.image} price = {product.price} _id = {product._id}></ProductCard>
            ))}
   
    </div>
    </>
    
    
    
  )
}

export default Home