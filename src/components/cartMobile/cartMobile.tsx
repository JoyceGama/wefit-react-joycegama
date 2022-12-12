import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"

import { CartContext } from "../../context/cart";

import { CartDiv } from "./style"
import Less from "../../assets/less.png";
import More from "../../assets/more.png";
import Trash from "../../assets/trash.png";

const CartMobile = ():JSX.Element => {

    const history = useHistory()

    const {cartList, setCartList , cartValue, removeProduct, increment, decrement} = useContext(CartContext)

    const buyProduct = () : void => {
        history.push("/successBuy")
        setCartList([])   
    }

    return (
        <>
        
            <CartDiv>

            <motion.ul 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            className="container-mobile">

                {cartList?.map((prod:any)=>(
                    <li key={prod.id} className="mobile-list">
                        <img className="mobile-img" src={prod.image} alt={prod.title}></img>

                            <div className="container-box">

                                <div className="box-informations-mobile">
                                    <p className="title-mobile">{prod.title}</p>
                                    <p className="price-mobile">{prod.price.toLocaleString("pt-br", {style: "decimal", minimumFractionDigits: 2})}</p>
                                    <img onClick={()=>removeProduct(prod.id)} className="trash-mobile" src={Trash} alt="lixo"></img>

                                </div>

                            <div className="container-quantity">

                            <div className="container-input-mobile">
                                <img onClick={()=>decrement(prod.id)} className="less-icon" src={Less} alt="icone de menos"></img>
                                <div className="number-div" >{prod.quantity}</div>
                                <img onClick={()=>increment(prod.id)} className="more-icon" src={More} alt="icone de mais"></img>
                            </div>

                            <div className="container-sub-total">
                                <p className="subtotal-p">Subtotal</p>
                                <p className="price-product">R$ {prod.price.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2})}</p>
                            </div>

                            </div>
                            </div>
                    </li>))}

            </motion.ul>

                <div className="line-mobile"></div>
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1}}
                className="box-container">

                <div className="container-price-mobile">
                    <p className="price-all-mobile">Total</p>
                    <p className="price-total">R$ {cartValue}</p>
                </div>

                <button onClick={buyProduct} className="button-finally">Finalizar</button>

                </motion.div>
                
            </CartDiv>
    
        </>
    )
}

export default CartMobile