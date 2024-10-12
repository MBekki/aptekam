import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;
export const MyContainer = styled.div`
    width: 100%;
    max-width: 85%;
    @media screen and (min-width: 1441px) {
        width: 100%;
        max-width: 1220px;
    }
    @media screen and (max-width: 425px) {
        width: 100%;
        max-width: 90%;
    }
`;