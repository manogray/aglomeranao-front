import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    float: left;
    width: 100%;
    height: 58px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    h2{
        position: relative;
        float: left;
        font-family: 'Khand', sans-serif;
        font-size: 28px;
        text-align: center;
        font-weight: 100;

        span {
            color: #8900F4;
            font-weight: 700;
        }
    }
`;

export const BackButton = styled.button`
    position: absolute;
    float: left;
    background: none;
    border: none;
    margin-right: 20px;
    left: 4%;
`;

export const MenuButton = styled.button`
    position: absolute;
    float: left;
    background: none;
    border: none;
    margin-right: 20px;
    right: 0%;
`;
