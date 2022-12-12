import { useContext } from "react";
import { motion } from "framer-motion"
import { CartContext } from "../../context/cart";


import { CardStyle } from "./style"
import CartImg from "../../assets/cart.png"
import Loading from "../loading/loading";


const Cards = (): JSX.Element => {

    const {cartList, setCartList, productList} = useContext(CartContext)

    const addCart = (id:any) => {
        const item = cartList.find((element:any)=> element.id === id)

        if(item){
            
            incrementButton(id)

        } else{

            
            const newItem = productList.find((element:any)=> element.id === id)
            
            setCartList([...cartList, {...newItem, quantity: 1 }])
           
            sessionStorage.setItem("cartItens", JSON.stringify(cartList))  
        }    
    }

    const incrementButton = (id:any) => {

        const findProduct = cartList.map((element:any)=>{
            if(element.id === id){
             element.quantity += 1
            }
            return element
       })
        setCartList([...findProduct])
       }
 
    
    return(
        <>
           { 
            productList.length === 0 ? <Loading />

             : 
                <CardStyle>
                    {productList?.map((prod:any)=>{
                        
                       const findIten = cartList.find((element:any)=> element.id === prod.id)

                           return( <motion.li key={prod.id} className="card-list"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 1}}>

                                <img className="li-image" src={prod.image} alt="imagem do filme"></img>
                                <p className="li-title">{prod.title}</p>
                                <p className="li-price">R$ {prod.price.toLocaleString("pt-br", {style: 'decimal', minimumFractionDigits: 2})}</p>
                                <button onClick={()=>addCart(prod.id)}  className="li-button"><img src={CartImg} alt="cart">
                                </img > {findIten?.quantity} Adicionar ao Carrinho</button>
                                
                            </motion.li>)
})}
                </CardStyle>
            }
        </>
      
    )

}

export default Cards