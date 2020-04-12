import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    float: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const List = styled.div`
    position: relative;
    float: left;
    width: 88%;
    display: flex;
    flex-direction: column;
`;

export const TitleList = styled.h3`
    font-family: 'Montserrat', sans-serif;
    color: #b3b3b3;
    text-align: center;
    margin-bottom: 15px;
`;

export const Card = styled.div`
    position: relative;
    float: left;
    width: 100%;
    padding: 10px;
    box-shadow: 1px 2px 5px #333;
    display: flex;
    align-items: center;

    img {
        width: 80px;
        margin-right: 10px;
        border-radius: 50%;
    }
`;

export const InfoCard = styled.div`
    
`;
