import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  // DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import axios from 'axios';
import { updateProd } from '@/redux/productSlice';
import { useDispatch } from 'react-redux';
import {Pencil} from "lucide-react";
import { useToast } from '@/hooks/use-toast';


// eslint-disable-next-line react/prop-types
const UpdateProductModal = ({_id}) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast()
  const [formData, setFormData] = React.useState({
    name: '',
    price: '',
    image: ''
  });

  const updateProduct =  async (id, newProd) => {

    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/products/${id}`, newProd);
      console.log(response.data);

      if (response.data.success) {
        const newProd = response.data.data
        dispatch(updateProd({id,newProd}))
        return { success: true, message: "Product updated!!" };
      } else
        return { success: false, message: "Some error occured in updating" };
    } catch (error) {
      console.log("Error occured in updateProduct", error);
      return { success: false, message: "error in updating: server issue" };
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Now you can access all values in formData
    console.log('Form Data:', formData);

    const res = await updateProduct(_id,formData)

    toast({
      title: res.message,
      description: "Friday, February 10, 2023 at 5:57 PM",
      duration: 2500,
      variant: "success",
    })

    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      <Button variant="outline" size = "sm" >
          <Pencil className="w-4 h-4 mr-2" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Card className="border-0 shadow-none">
          <CardHeader>
            <DialogTitle className="text-xl font-semibold">Update Product</DialogTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  placeholder="Enter product name"
                  className="w-full"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="Enter price"
                  className="w-full"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  placeholder="Enter image URL"
                  className="w-full"
                  value={formData.image}
                  onChange={handleChange}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" onClick={handleSubmit}>
              Update Product
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProductModal;