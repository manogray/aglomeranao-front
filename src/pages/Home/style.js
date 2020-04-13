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

export const ListContainer = styled.div`
    position: relative;
    float: left;
    width: 100%;
    margin-bottom: 36px;
`;

export const TitleList = styled.h3`
    font-family: 'Poppins', sans-serif;
    color: #000;
    font-size: 14px;
    line-height: 21px;
    margin-left: 24px;
    margin-top: 17px;
`;

export const LateralList = styled.div`
    position: relative;
    float: left;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 24px;
`;

export const Item = styled.div`
    position: relative;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    padding: 13px 20px;
    box-shadow: 0px 0px 6px rgba(0,0,0,0.1);

    p {
        margin-top: 24px;
        font-size: 14px;
        line-height: 21px;
    }
`;

export const Store = styled.div`
    position: relative;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 14px;
        line-height:21px;
    }
`;

export const PicIcon = styled.div`
    position: relative;
    float: left;
    width: 89.5px;
    height: 85.5px;
    border-radius: 5px;
    background: url(${props => props.photo});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
