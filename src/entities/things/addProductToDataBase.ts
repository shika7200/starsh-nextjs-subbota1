"use server";


import { revalidateTag } from "next/cache";
import { InfoDb } from "./types";

export const addProductToDataBase = async (event: FormData) => {
    const product = event.get("product")?.toString()
    const price = event.get("price")?.toString()

    if (!product || !price)  return ;
 
 const newProduct: InfoDb ={
   product,
     price
 }
 const url = "https://65193ac1818c4e98ac602a04.mockapi.io/products";
await fetch(url, {
    method:"POST",
    body:JSON.stringify(newProduct),
    headers:{
        "Content-Type" : "application/json"
    }
});
revalidateTag("products")
 }