import styled from "styled-components";

import Vector from "../../assets/vector.png"

interface PropHeight {
    height: string;
  }

export const BackgroundStyle = styled.div`
    min-height: 100vh;
    width:100%;
    background-color: rgba(47, 46, 65, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeaderStyle = styled.header<PropHeight>`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    height: ${props => props.height};
    margin-bottom:20px;

    .title-header{
        color rgba(255, 255, 255, 1);
        font-family: "Open Sans", sans-serif;
        font-weight: 700;
        font-size:20px;
        cursor:pointer;
    }

    .container-box-header{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container-box-p{
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        align-items: flex-end;
    }

    .cart-text{
        color:rgba(255, 255, 255, 1);
        font-family: "Open Sans", sans-serif;
        font-weight:600;
        font-size:14px;
        line-height: 0px;
        margin: 0;
    }

    .cart-quantity{
        color:#999999;
        font-family: "Open Sans", sans-serif;
        font-weight:600;
        font-size: 12px;
    }

    @media (max-width: 550px){
    justify-content: space-between;

        .cart-text{
            display:none;
        }
        .cart-quantity{
            margin-bottom: 20px;
        }

        .title-header{
            padding-left:10px;
        }

        .container-box-header{
            padding-right:10px;
        }
    }
`

export const CartImg = styled.img`
    height: 25px;
    width: 30px;
    border-radius: 0px;
    margin-bottom: 15px;
    cursor: pointer;

    @media (max-width: 550px){
    height: 25px;
    width: 30px;
    border-radius: 0px;
    cursor: pointer;
    }
    `
CartImg.defaultProps = {
    src: Vector
  };