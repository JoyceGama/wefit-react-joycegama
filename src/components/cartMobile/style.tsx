import styled from "styled-components";


export const CartDiv = styled.div`
    width: 90%;
    height:30px;
    min-height: 80vh;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;

            background-color: #FFFFFF;
            border-radius: 4px;
            margin-top: 15px;

    .container-mobile{
        width: 100%;

            display: flex;
            flex-direction: column;
            align-content: center;
            align-items: center;

                overflow: auto;
                padding:0;
    }

    .mobile-list {
        width: 90%;

            display: flex;
            align-items: center;

                list-style: none;
    }

    .mobile-img {
        width: 25%;
        height: 65%;
    }

    .container-box {
        height:65%;
        width: 90%;
        
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
    }

    .box-informations-mobile{    
        width: 90%;
        height:30%;

            display: flex;
            justify-content: space-between;
            align-items: baseline;
            padding: 10px;
    }

    .title-mobile{
        display: flex;
        align-items: center;

            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            color: #2F2E41; 
    }

    .price-mobile{
        display: flex;
        align-items: center;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #2F2E41;
    }
    
    .trash-mobile{
        width: 7%;
    }
    
    .container-quantity{
        width: 100%;

            display: flex;
            align-items: center;
            justify-content: space-between;

                margin-left: 10px;
    }

    .container-input-mobile{
        width:50%;

            display: flex;
            align-items: center;
            justify-content: space-between;
    }
    
    .less-icon, .more-icon{
        width: 20%;
    }

    .number-div{
        width: 60%;
        height: 20px;
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

    .container-sub-total{
        margin-right: 17px;
    }

    .subtotal-p{

        display: flex;
        align-items: center;

            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            color: #999999;
            margin-bottom: 0;
    }

    .price-product{
        display: flex;
        align-items: center;
        
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #2F2E41;
        margin-top: 0;;
    }
    
    .line-mobile{
        width: 90%;
        height: 2px;
        
        background: #999999;
    }

    .box-container {
        width:90%;
    }

    .container-price-mobile{
        width: 100%;
        height: 50%;
            display: flex;
            justify-content: flex-end;
                gap: 15px;
    }
    
    .price-all-mobile{      
        display: flex;
        align-items: center;

            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            text-align: center;
            color: #999999;
    }

    .price-total{
        display: flex;
        align-items: center;

            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            text-align: center;
            color: #2F2E41;
    }



    .button-finally{
        width: 100%;
        height: 40px;

            background: #009EDD;
            border-radius: 4px;
            border: none;

                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 14px;
                line-height: 19px;
                text-align: center;
                color: #FFFFFF;
    }

    @media (min-width: 630px){
        display:none;
    }
`
