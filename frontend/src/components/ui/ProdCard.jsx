
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Trash2} from "lucide-react";
import axios from "axios";
import { deleteProd } from "@/redux/productSlice";
import { useDispatch } from "react-redux";
import UpdateProductModal from "./updateCard";
import { useToast } from '@/hooks/use-toast';


// eslint-disable-next-line react/prop-types
const ProductCard = ({prodName,img,price,_id}) => {

  const dispatch = useDispatch();
  const { toast } = useToast()

  const HandleDelete = async ()=>{
    const res = await deleteProduct(_id)
    toast({
      variant: "destructive",
      title: res.message,
      description: "Friday, February 10, 2023 at 5:57 PM",
      duration: 2500,
    })
  }

  const deleteProduct = async (id) => {

    try {
      const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
      console.log(response.data);

      if (response.data.success) {
        dispatch(deleteProd(id));
        return { success: true, message: "Product deleted!!" };
      } else
        return { success: false, message: "Some error occured in deleting" };
    } catch (error) {
      console.log("Error occured in deleteProduct", error);
      return { success: false, message: "error in deleting: server issue" };
    }
  }


  return (
    <Card className="w-60
     overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg blue">
      {/* Image Section */}
      <CardHeader className="p-0">
        <img 
          src = {img}
          alt="Product"
          className="w-full h-40 object-cover"
        />
      </CardHeader>

      {/* Content Section */}
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{prodName}</h3>
          <p className="text-lg font-bold text-primary">₹ {price}</p>
        </div>
      </CardContent>

      {/* Action Buttons */}
      <CardFooter className="p-4 pt-0 flex justify-between">
        {/* <Button variant="outline" size = "sm" >
          <Pencil className="w-4 h-4 mr-2" />
          Edit
        </Button> */}

        <UpdateProductModal _id = {_id}></UpdateProductModal>

        <Button variant="destructive" size = "sm" onClick = {HandleDelete}>
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;