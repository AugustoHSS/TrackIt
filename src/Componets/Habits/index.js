import Header from '../Header'
import Footer from '../Footer'
import { Container, CreateHabit, MyHabits, ButtonContainer } from "./style"

export default function Habits() {
    return (
        <Container>
            <Header />
            <ButtonContainer>
                <h2>Meus hábitos</h2>
                <CreateHabit><p>+</p></CreateHabit>
            </ButtonContainer>
            <MyHabits>

            </MyHabits>
            <Footer />
        </Container>
    )
}