import {useContext} from "react";
import { useHistory } from "react-router-dom";


import { CartContext } from "../../context/cart";
import { BackgroundStyle, CartImg, HeaderStyle } from "./style"


interface Props{
    children?:JSX.Element
}

const Background = ({children}:Props): JSX.Element => {

    const history = useHistory()

    const {cartList} = useContext(CartContext)

    const openCart = () : void => history.push("/cart")

    const goHome = () : void => history.push("/")
    

    return (

        <BackgroundStyle>

            <HeaderStyle height="70px">
                
                <p onClick={goHome} className="title-header">WeMovies</p>

                    <div className="container-box-header">

                        <div className="container-box-p">
                            <p className="cart-text">Meu Carrinho</p>
                            <p className="cart-quantity">{cartList.length} itens</p>   
                        </div>
                        <CartImg onClick={openCart}/> 

                    </div>

            </HeaderStyle>
               {children}
        </BackgroundStyle>
    )
}

export default Background