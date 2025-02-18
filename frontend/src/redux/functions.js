
// import axios from "axios";
// import { addProd, deleteProd, updateProd, setProd } from "./functions.js"




// export const addProduct = async (newProd) => {
    
//     if (!newProd.prodName || !newProd.price || !newProd.img) {
//       return { success: false, message: "Please fill in all fields." };
//     }

//     try {
//       const response = await axios.post("/api/products", newProd);
//       console.log(response.data);

//       if (response.data.success) {
//         dispatch(addProd(response.data.data))
//         return { success: true, message: "Product added!!" };
//       } else
//         return { success: false, message: "Some error occured in adding" };
//     } catch (error) {
//       console.log("Error occured in addProduct", error);
//       return {
//         success: false,
//         message: "Some error occured in adding: server issue",
//       };
//     }
//     // console.log(newProd);
//   }

//   export const deleteProduct = async (id) => {

//     try {
//       const response = await axios.delete(`/api/products/${id}`);
//       console.log(response.data);

//       if (response.data.success) {
//         dispatch(deleteProd(id));
//         return { success: true, message: "Product deleted!!" };
//       } else
//         return { success: false, message: "Some error occured in deleting" };
//     } catch (error) {
//       console.log("Error occured in deleteProduct", error);
//       return { success: false, message: "error in deleting: server issue" };
//     }
//   }

//   export const updateProduct =  async (id, newProd) => {

//     try {
//       const response = await axios.put(`/api/products/${id}`, newProd);
//       console.log(response.data);

//       if (response.data.success) {
//         const newProd = response.data.data
//         dispatch(updateProd({id,newProd}))
//         return { success: true, message: "Product updated!!" };
//       } else
//         return { success: false, message: "Some error occured in updating" };
//     } catch (error) {
//       console.log("Error occured in updateProduct", error);
//       return { success: false, message: "error in updating: server issue" };
//     }
//   }

//   export const fetchProducts =  async () =>{
//       const response = await axios.get("/api/products");
//       console.log(response.data.data);
//       dispatch(setProd(response.data.data))
//   }

  