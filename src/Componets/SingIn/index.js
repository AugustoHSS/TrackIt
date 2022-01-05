import logo from '../../assets/Logo.png';

import axios from 'axios';
import Loader from "react-loader-spinner";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container, Input, Button, Form } from './style';

export default function SingIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [urlImg, setUrlImg] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();


    function doSingIn(e) {
        e.preventDefault();
        setIsLoading(true)
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: email,
            name: name,
            image: urlImg,
            password: password,
        });
        promisse.then(() => { navigate("/"); setIsLoading(false) })
        promisse.catch(() => { setIsLoading(false); alert("Falha ao enviar os dados.") })

    }
    return (
        <Container>
            <img src={logo} alt="Logo" />
            <Form onSubmit={doSingIn}>
                <Input isLoading={isLoading} onChange={(e) => setEmail(e.target.value)} value={email} type="email" disabled={isLoading} placeholder="email" required />
                <Input isLoading={isLoading} onChange={(e) => setPassword(e.target.value)} value={password} type="password" disabled={isLoading} placeholder="senha" required />
                <Input isLoading={isLoading} onChange={(e) => setName(e.target.value)} value={name} type="text" disabled={isLoading} placeholder="nome" required />
                <Input isLoading={isLoading} onChange={(e) => setUrlImg(e.target.value)} value={urlImg} type="url" disabled={isLoading} placeholder="foto" required />
                <Button isLoading={isLoading} disabled={isLoading} type="submit">
                    {isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={45} width={70} /> : "Cadastrar"}
                </Button>
            </Form>
            <Link to={'/'}>Já tem uma conta? Faça login!</Link>
        </Container>
    )
}