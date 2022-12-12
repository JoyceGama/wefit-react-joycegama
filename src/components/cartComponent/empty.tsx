import { useHistory } from "react-router-dom";

import { motion } from "framer-motion"
import { ContainerEmpty } from "./style";
import EmptyImg from "../../assets/empty.png"



const EmptyCart = (): JSX.Element => {

    const history = useHistory()

    const backRoute = () : void => history.push("/")
    
    return (
        <ContainerEmpty height="70vh" width="60%" alignItems="center" justifyContent="space-evenly" flexDirection="column">

            <motion.p 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            className="title-empty-cart">Parece que não há nada por aqui :&#40;</motion.p>

            <motion.img
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             exit={{opacity: 0}}
             transition={{duration: 2}}
            className="img-empty-cart" src={EmptyImg} alt="imagem com contexto: carrinho vazio"></motion.img>

            <motion.button
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 4}}
            onClick={backRoute} className="button-empty-cart">Voltar</motion.button>
            
        </ContainerEmpty>
    )
}

export default EmptyCart