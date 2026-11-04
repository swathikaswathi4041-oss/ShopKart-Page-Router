import"../styles/globals.css"
// import "bootstrap/dist/css/bootstrap.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CartProvider from "@/context/CartContext";

import { useEffect,useState } from "react";
import { useRouter } from "next/router";
import ProductSkelton from "@/components/ProductSkelton";


export default function App({Component,pageProps }:any) {

  const router =useRouter();
  const [loading,setloading]= useState(false);

  useEffect(()=>{
    const handleStart =(url:string)=>{
      if(url.split("?")[0].startsWith("/products"))
      {
        setloading(true);
      }else{
        setloading(false);
      }
    };

    const handleComplete = () => {
      setloading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  },[router]);
  return (
        <CartProvider>
          <Navigation/>
          { loading ?
           (<ProductSkelton/>)
           :( <Component {...pageProps}/>)}
           
             <Footer/>
          </CartProvider>
     
  );
}
