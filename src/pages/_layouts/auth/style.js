import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    background: #f9fafb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    background: #fff;
    box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
    border-radius: 5px;
    padding: 13px 13px;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    img {
        margin: 25px 0 0;
        width: 110px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0,0,0,0.1);
            border: 0;
            border-radius: 5px;
            height: 44px;
            padding: 0 15px;
            color: #000;
            margin: 0 0 10px;
        }

        button {
            margin: 20px 0 0;
            height: 44px;
            background: #8900f4;
            border: 0;
            color: #fff;
            border-radius: 5px;
            text-transform: uppercase;
            font-size: 16px;
        }

        a {
            margin: 10px 0 25px 0;
        }
    }
`;
