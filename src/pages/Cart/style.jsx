import styled from 'styled-components'

export const Img = styled.img`
    max-width: 150px;
    width: 20vw;
    height: 15vh;
    object-fit: cover;
`
export const BoxCard = styled.div`
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 0 10px;
    margin: 10px 0;
`
export const Count = styled.span`
    color: red;
    font-weight: 700;
`
export const Row = styled.span`
    display: flex;
    justify-content: space-between;
`
export const BoxTotal = styled.div`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f7f6f3;
    border-radius: 5px;
    padding: 15px;
    margin: 20px 0;
`
export const InputHidden = styled.input`
    display: none;
`