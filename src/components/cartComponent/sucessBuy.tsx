import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import { ContainerSuccess } from "./style"
import Sucess from "../../assets/sucess.png";

const SucessBuy = ():JSX.Element => {

    const history = useHistory()

    const backHome = () : void => history.push("/")
    

    return(

        <ContainerSuccess height="70vh" width="60%" alignItems="center" justifyContent="space-evenly" flexDirection="column">

            <motion.p 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            className="title-success-cart">Compra realizada com sucesso!</motion.p>

            <motion.img
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 2}}
            className="img-success-cart" src={Sucess} alt="imagem com contexto: sucesso na compra"></motion.img>

            <motion.button
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 3}}
            onClick={backHome} className="button-success-cart">Voltar</motion.button>

        </ContainerSuccess>

    )
}

export default SucessBuy