import logo from '../../assets/Logo.png';

import { Link } from 'react-router-dom';

import { Container, Input, Button, Form } from './style';

export default function MainPage() {
    return (
        <Container>
            <img src={logo} alt="Logo" />
            <Form>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="senha" />
                <Button>Entrar</Button>
            </Form>
            <Link to={'/cadastro'}>Não tem uma conta? Cadastre-se!</Link >
        </Container>
    )

}
