import styled from 'styled-components';


export const Container = styled.div`
    height:70px;
    width:100vw;
    padding: 0 5% 0 5%;
    position:fixed;
    z-index: 2;
    top:0;
    left: 0;
    background-color:#126BA5;
    display:flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    img{
        width: 100px;
        height: 33px;
    }
`
export const UserImage = styled.header`

    img{
        height:51px;
        width:51px;
        border-radius: 100px;
    }

`