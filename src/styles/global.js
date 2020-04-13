import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: #f9fafb;
    }

    body, input, button {
        font: 14px 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

`;

export const CardShop = styled.div`
    position: relative;
    float: left;
    width: 100%;
    min-height: 154px;
    box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
    background: #fff;
    margin-top: 34px;
`;

export const CardHeader = styled.div`
    position: relative;
    float: left;
    width: 100%;
    height: 154px;
    background: url(${props => props.photo});
    background-size: cover;
    background-position: center;

    span {
        position: absolute;
        float: left;
        bottom: 8%;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        padding: 3px 15px;
        color: #FC0D54;
        border-radius: 5px;
    }
`;

export const CardInfo = styled.div`
    position: relative;
    float: left;
    width: 100%;

    h2 {
        font-size: 16px;
        line-height: 24px;
        color: #000;
        margin-top: 8px;
        padding: 0px 12px;
    }
`;

export const Stats = styled.div`
    position: relative;
    float: left;
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 3px;
    margin-bottom: 8px;
    
    .rightBord {
        border-right: 1px solid #828282; 
    }

    .leftBord {
        border-left: 1px solid #828282;
    }
`;

export const Stat = styled.div`
    position: relative;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin-top: 5px;
        color: #828282;
        font-weight: bold;
        font-size: 15px;
        line-height: 22px;
    }

    .evaluate {
        color: #00De59 !important;   
    }
`;