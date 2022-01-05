import styled from 'styled-components';


export const Container = styled.div`
	width: 100vw;
	height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 180px;
        height: 180px;
        margin: -66px 0 33px;
    }
`;

export const Input = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    padding-left: 11px;

    &::placeholder{
        font-size: 20px;
        color: #DBDBDB;
    }
`
export const Button = styled.button`
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 303px;
    height: 45px;
    color: #FFFFFF;
    font-size: 21px;
    margin-bottom: 25px;
    border: none;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
