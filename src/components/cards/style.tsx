import styled from "styled-components";


export const CardStyle = styled.ul`
    width: 65%;
    height: 100%;
    background-color: transparent;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    padding:0;
    align-items: center;
    justify-content: center;
    margin:0;
    gap:10px;

    .card-list{
    background-color: white;
    width: 27%;
    height:27%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid transparent;
    border-radius:3px;
    padding:7px;
    }

    .li-image{
    width:50%;
    height:70%;
    }

    .li-title{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    text-align: center;
    color: #333333;
    }

    .li-price{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    text-align: center;
    color: #2F2E41;
    margin:0;
    }

    .li-button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 12px;
    width: 100%;
    height: 40px;
    background: #009EDD;
    border-radius: 4px;
    border:none;
    color:#FFFFFF;
    font-family: 'Open Sans';
    text-transform: uppercase;
    margin-top: 10px;
    font-size: 12px;
    
    &:hover{
        background-color:#039B00;
        cursor: pointer;
    }
    
    }

     @media (max-width:690px){
    .li-button{
        font-size:8px;  
    }

    @media (max-width:550px){
        flex-direction: column;

        .card-list{
            width: 100%;
        }
    }
`