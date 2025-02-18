
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProd } from '@/redux/productSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';



const ProductCreateForm = () => {

    const [data, setData] = useState({img: "", prodName : "", price : 0});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { toast } = useToast()

    const addProduct = async (newProd) => {
    
      if (!newProd.prodName || !newProd.price || !newProd.img) {
        return { success: false, message: "Please fill in all fields." };
      }
  
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/products`, newProd);
        console.log(response.data);
  
        if (response.data.success) {
          dispatch(addProd(response.data.data))
          return { success: true, message: "Product added!!" };
        } else
          return { success: false, message: "Some error occured in adding" };
      } catch (error) {
        console.log("Error occured in addProduct", error);
        return {
          success: false,
          message: "Some error occured in adding: server issue",
        };
      }
      // console.log(newProd);
    }

    const onSubmit = async(e) =>{
      e.preventDefault();
      const res = await addProduct(data);
      console.log(res);
      toast({
        title: res.message,
        description: "Friday, February 10, 2023 at 5:57 PM",
        duration: 2500,
        variant: "success",
      })
      navigate("/")
    }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Create Product</CardTitle>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name"
              placeholder="Enter product name"
              className="w-full"
              value = {data.prodName}
              onChange = {(e) => {setData({...data, prodName: e.target.value})}}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input 
              id="price"
              type="number"
              placeholder="Enter price"
              className="w-full"
              value = {data.price}
              onChange = {(e) => {setData({...data, price: e.target.value})}}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input 
              id="image"
              type="url"
              placeholder="Enter image URL"
              className="w-full"
              value = {data.img}
              onChange = {(e) => {setData({...data, img: e.target.value})}}
            />
          </div>
        </CardContent>
        
        <CardFooter>
          <Button type="submit" className="w-full">
            Create Product
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ProductCreateForm;