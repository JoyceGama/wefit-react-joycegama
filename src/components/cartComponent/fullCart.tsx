import { useContext } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import EmptyCart from "./empty";
import CartMobile from "../cartMobile/cartMobile";
import { CartContext } from "../../context/cart";

import { Container } from "./style"
import Less from "../../assets/less.png"
import More from "../../assets/more.png";
import Trash from "../../assets/trash.png";

const Fullcart = (): JSX.Element => {

    const {cartList, setCartList, cartValue, removeProduct, increment, decrement} = useContext(CartContext)

    const history = useHistory()

    const buyProduct = () : void => {
        history.push("/successBuy")
        setCartList([])
    }

    return(
            <>
                {cartList.length === 0 ? false :

                    <Container height="auto" width="60%" justifyContent="space-around"
                     flexDirection="column" alignItems="center">

                        <div className="container-box-product-information">
                            <p className="product-p">Produto</p>

                                <div className="box-product-information">
                                    <p className="product-p">qtd</p>
                                    <p className="product-p">subtotal</p>
                                </div>

                        </div>

                    {cartList?.map((product:any)=>(

                <>
                        <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 1}}
                        className="container-products-cart" 
                        key={product.id}>
                            <img  className="product-cart-img" src={product.image} alt={product.title}></img>

                                <div className="box-product-price-title">
                                    <p className="title-product">{product.title}</p>
                                    <p className="price-product">R$ {product.price.toLocaleString("pt-br", {style: "decimal", minimumFractionDigits: 2})}</p>
                                </div>

                    

                        <div className="container-quantity">
                            <img onClick={()=>decrement(product.id)} className="less-icon" src={Less} alt="icone de menos"></img>
                             <div className="number-div" >{product.quantity}</div>
                             <img onClick={()=>increment(product.id)} className="more-icon" src={More} alt="icone de mais"></img>
                         </div>

                        <div className="container-box-price-trash">
                            <p className="price-product">R$ {product.price.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2})}</p>
                            <img onClick={()=>removeProduct(product.id)} className="trash-icon" src={Trash} alt="icone de lixo"></img>
                        </div>

                        </motion.div>

                </> ))}
                     

                        <div className="line"></div>

                        <div className="box-request-product">
                    
                             <motion.button
                             initial={{opacity: 0}}
                             animate={{opacity: 1}}
                             exit={{opacity: 0}}
                             transition={{duration: 2}} 
                             onClick={buyProduct} className="button-request-product">Finalizar pedido</motion.button>

                                <div className="container-box-total">
                                    <p className="p-request-total">Total</p>
                                    <p className="p-request-price">R$ {cartValue}</p>
                                </div>

                        </div>

                    </Container>
                }

                {cartList.length === 0 ? <EmptyCart /> : <CartMobile />}
       
            </>
    )
}

export default Fullcart