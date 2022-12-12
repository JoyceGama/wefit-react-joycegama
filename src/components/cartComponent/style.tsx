import styled from "styled-components";

interface PropsContent{
    width:string;
    height: string;
    flexDirection: string;
    alignItems: string;
    justifyContent: string
}

export const Container = styled.div<PropsContent>`

    width: ${props => props.width};
    min-height:${props => props.height};

        display: flex;
        flex-direction: ${props => props.flexDirection};
        align-items: ${props => props.alignItems};
        justify-content: ${props => props.justifyContent};

            background-color: #FFFFFF;
            margin-top: 15px;
            border-radius: 4px;
            line-height: 19px;

                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                text-align: center;
                color: #FFFFFF;
    }

    .container-box-product-information{
        display: flex;
        flex-direction: row;

            width: 95%;
    }

    .product-p{
        width:95%;
            display:flex;
            align-items: center;

                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 12px;
                color: #999999;
                text-transform:uppercase;
    }

    .box-product-information{
        display: flex;
        justify-content: space-evenly;

            width: 100%;
            height: 50%;
    }


    .container-products-cart{
        width: 95%;

            display: flex;
            justify-content: center;
            align-items: center;

                margin-top:10px;
    }

    .product-cart-img {
        width:15%;
    }
    
    .box-product-price-title {
        width: 37%;

            margin-left: 30px;
    }


    .title-product{
        display: flex;
        align-items: center;

            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #2F2E41;
    }

    .price-product {
        display: flex;
        align-items: center;

            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #2F2E41;
    }

    .container-quantity {
        width: 35%;
            display: flex;
            align-items: center;
            justify-content: flex-start;

                gap: 10px;
    }
    
    .less-icon, .more-icon, .trash-icon{
        cursor:pointer;
    }
    
    .number-div{
        width: 60%;
        height: 26px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: center;
        
                box-sizing: border-box;
                padding: 16px;
                background: #FFFFFF;
                border: 1px solid #D9D9D9;
                border-radius: 4px;

                    font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    color: #2F2E41;
    }

    .container-box-price-trash{
        width: 33%;

            display: flex;
            justify-content: space-between;
            align-items: center;
    }

    .line{
        width: 95%;
        height: 1px;

            background-color: #999999;
            margin-top: 20px;
            margin-bottom: 5px;
    }

    .box-request-product{
        width: 95%;

            display: flex;
            justify-content: space-between;
            align-items: center;
    }

    .button-request-product{
        width: 235px;
        height: 40px;

            background: #009EDD;
            border-radius: 4px;
            border:none;

                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                text-align: center;
                color: #FFFFFF;
                text-transform:uppercase;

                    &:hover{
                        background-color:#039B00;
                        cursor:pointer;
                    }
                }

    .container-box-total{
        width: 30%;

            display: flex;
            justify-content: space-evenly;
    }


    .p-request-total {
        display: flex;
        align-items: center;

            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            text-align: center;
            color: #999999;
            text-transform:uppercase;
    }

    .p-request-price{
        display: flex;
        align-items: center;

            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            text-align: center;
            color: #2F2E41;
    }

    @media (max-width: 630px){
        display:none;
    }
     
`
export const ContainerEmpty = styled.div<PropsContent>`

    width: ${props => props.width};
    min-height:${props => props.height};

        display: flex;
        flex-direction: ${props => props.flexDirection};
        align-items: ${props => props.alignItems};
        justify-content: ${props => props.justifyContent};
            
            background-color: #FFFFFF;
            border-radius: 4px;


    .title-empty-cart{
        width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                color: #2F2E41;
                text-align: center;
                line-height: 30px;
    }

    .img-empty-cart{

        width:70%;

        }

    .button-empty-cart{
        width: 40%;
        height: 60px;

            background: #009EDD;
            border-radius: 4px;
            border:none;

                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                text-align: center;
                color: #FFFFFF;
                margin: 20px;

                        &:hover {
                            background-color:#039B00;
                            cursor:pointer;
                    }
                }

            @media (max-width:550px){
                width: 90%;
                justify-content: space-evenly;
        
                .title-empty-cart{
                    width: 60%;
                        line-height: 20px;
                        font-size: 18px;
                }

                .button-empty-cart{
                    margin:0;
                }
            

                    ` 

export const ContainerSuccess = styled.div<PropsContent>`

    width: ${props => props.width};
    min-height:${props => props.height};
                
        display: flex;
        flex-direction: ${props => props.flexDirection};
        align-items: ${props => props.alignItems};
        justify-content: ${props => props.justifyContent};
                            
            background-color: #FFFFFF;
            margin-top: 15px;
            border-radius: 4px;

    .title-success-cart {

        width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 30px;
                color: #2F2E41;
                text-align: center;
                line-height: 30px;
            }

    .img-success-cart {
        width:40%;
                }


    .button-success-cart {
        width: 40%;
        height: 60px;

            background: #009EDD;
            border-radius: 4px;
            border:none;

                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                text-align: center;
                color: #FFFFFF;
                margin: 20px;

                        &:hover {
                            background-color:#039B00;
                            cursor:pointer;
                    }
                }
            
                @media (max-width:550px){
                    width: 90%;
                    justify-content: space-evenly;
            
                    .title-success-cart{
                        width: 60%;
                            line-height: 20px;
                            font-size: 18px;
                    }
    
                    .button-success-cart{
                        margin:0;
                        height:45px;
                    }

            
            `