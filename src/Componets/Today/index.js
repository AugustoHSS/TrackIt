import Header from '../Header'
import Footer from '../Footer'
import UserContext from "../../contexts/UserContext";
import { useContext } from 'react';
import { Container } from "./style"

export default function Today() {
    const { loginResponse } = useContext(UserContext);
    return (
        <Container>
            <Footer></Footer>
            <Header></Header>
        </Container>
    )
}