import trackit from '../../assets/TrackIt.png';
import UserContext from "../../contexts/UserContext";
import { useContext } from 'react';
import { Container, UserImage } from './style'

export default function Header() {
    const { loginResponse } = useContext(UserContext);
    const urlImgUser = loginResponse.image
    return (
        <Container>
            <img src={trackit} alt="TrackIt" />
            <UserImage>
                <img src={urlImgUser} alt="imagem" />
            </UserImage>
        </Container>
    )

}