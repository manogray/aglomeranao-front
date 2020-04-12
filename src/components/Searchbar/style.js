import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    float: left;
    width: 100%;
    display: flex;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;

    input {
        position: relative;
        float: left;
        width: 100%;
        border: none;
        padding: 15px 8px;
        font-size: 16px;
        border-radius: 5px;
    }
`;

export const Search = styled.button`
    position: relative;
    float: left;
    background: #fff;
    border: none;
    padding: 0px 12px 0px 0px;
    border-radius: 5px;
`;