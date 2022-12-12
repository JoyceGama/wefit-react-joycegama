import { ReactNode } from "react";
import { CartProvider } from "../cart";


interface IProvider {
  children: ReactNode
}

const Provider = ({ children }: IProvider) => (
  <CartProvider>
    {children}
  </CartProvider>
);

export default Provider;