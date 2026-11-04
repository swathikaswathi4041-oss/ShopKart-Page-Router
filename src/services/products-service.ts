//fetch all products 

import { ServiceBase } from "./service-base";

export class ProductService extends ServiceBase{
    static getProducts =async()=>{
        const productResp =await fetch(this.getUrl('/products'));   
        const products =await productResp.json();
        return products.products;
     }


//fetch a single product by its id

  static getProductById = async (id :number)=>{ 
     var productResp =await fetch(this.getUrl(`/products/${id}`));
     var product =await productResp.json();
     return product;
} 

//fetch to get category list
static getProductsByCategory= async(category:string)=>{
    const productResp =await fetch(this.getUrl(`/products/category/${category}`));
    const products =await productResp.json();
     return products.products;
}
}
