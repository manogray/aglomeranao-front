import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    float: left;
    width: 100%;
    height: ${props => props.height}px;
    background: url(${props => props.photo});
    background-size: cover;
    background-position: center;
    margin-top: 58px;
`;

export const Filter = styled.div`
    position: relative;
    float: left;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);

    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export const Title = styled.p`
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    padding: 20px 0px 18px 24px;
`;

export const Text = styled.p`
    position: relative;
    float: left;
    width: 90%;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    padding: 0px 0px 0px 24px;
`;
