import { createContext, ReactNode } from "react";
import {useState,useEffect} from "react";

import { api } from "../../service/api";

interface ICartProviderProps {
    children: ReactNode
}

interface ICartList{
    id?:number,
    image?: any,
    title?: string,
    price?: number,
    quantity?: number
}

interface ICartContext{
    cartList: ICartList[],
    setCartList: React.Dispatch<React.SetStateAction<ICartList[]>>,
    productList: ICartList[],
    setProductList: React.Dispatch<React.SetStateAction<ICartList[]>>,
    cartValue: [],
    setCartValue: React.Dispatch<React.SetStateAction<[]>>,
    removeProduct: any,
    increment:any,
    decrement: any
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

export const CartProvider = ({children} : ICartProviderProps) => {
    
    const[cartList, setCartList] = useState<any>([])
    const[productList, setProductList] = useState<any>([])
    const[cartValue, setCartValue] = useState<any>(0)

    const removeProduct = (id:number) => {
        const item = cartList.find((element:ICartList)=> element.id === id)
        const index = cartList.indexOf(item)

        const newList = cartList.filter((element:ICartList, i:number) => i !== index)
        setCartList(newList)
      
    }

    const increment = (id:number) => {

        const findProduct = cartList.map((element:any)=>{
            if(element.id === id){
             element.quantity += 1
            }
            return element
       })
        setCartList([...findProduct])
       }
    
       const decrement = (id:number) => {
    
        const findProduct = cartList.map((element:any)=>{
            if(element.id === id && element.quantity === 1){
                
            }
            if(element.id === id && element.quantity > 1){
             element.quantity -= 1
            }
            return element
       })
        setCartList([...findProduct])
       }
    
    useEffect(()=>{
        setCartValue(cartList?.reduce((acc:number, value:any) => acc + (value.price * value.quantity), 0))
    },[cartList])
    
     
    useEffect(() => {
        api.get("/posts/").then((res)=> {
            setTimeout(() => {
                setProductList(res.data[0])
            }, 2000); 
        } )
        .catch((err)=>console.log(err))
    },[])

    return(
        <CartContext.Provider value={{cartList, setCartList, productList, setProductList, cartValue, setCartValue,
                                    removeProduct, increment, decrement}}>
                {children}
        </CartContext.Provider>
    )
}