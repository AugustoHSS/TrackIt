import axios from 'axios';
import Loader from "react-loader-spinner";
import Header from '../Header'
import Footer from '../Footer'
import {
    Container, CreateHabit, MyHabits, CreateHabitButtonContainer, Trash, ButtonCreateHabit,
    WeekDayButtons, Input, CancelSaveButtonsContainer, CancelButton, SaveButton
} from "./style"
import UserContext from "../../contexts/UserContext";
import { useState, useContext, useEffect } from 'react';

export default function Habits() {
    const { loginResponse } = useContext(UserContext);
    const [selectedWeekDays, setSelectedWeekDays] = useState([]);
    const [isCreatingHabit, setIsCreatingHabit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [habitName, setHabitName] = useState("")
    const [habitList, setHabitList] = useState([])
    const authorization = {
        headers: {
            "Authorization": "Bearer " + loginResponse.token
        }
    }

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", authorization);
        promisse.then(answer => setHabitList(answer.data));
    }, [])


    function deletingHabit(id) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm(`Você realmente gostaria de apagar o hábito?`)) {
            const promisse = axios.delete("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/" + id, authorization);
            promisse.then(setTimeout(listingHabits, 1000))
        }
        return;
    }

    function listingHabits() {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", authorization);
        promisse.then(answer => setHabitList(answer.data));
        setIsCreatingHabit(false);
        setIsLoading(false);
    }

    function selectingWeekDay(clikedWeekDay) {
        if (selectedWeekDays.includes(clikedWeekDay)) {
            const filterWeekDays = selectedWeekDays.filter(selectedWeekDay => selectedWeekDay !== clikedWeekDay);
            setSelectedWeekDays(filterWeekDays);
            return;
        }
        setSelectedWeekDays([...selectedWeekDays, clikedWeekDay]);
    }

    function saveHabit() {
        setIsLoading(true);

        const newHabit = {
            name: habitName,
            days: selectedWeekDays
        };
        console.log(newHabit)

        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newHabit, authorization)
        promisse.then(() => { listingHabits(); setSelectedWeekDays([]); setHabitName("") })
        promisse.catch(answer => { alert("Verifique os dados e tente novamente"); setIsLoading(false) })
    }

    function puttingHabbitOnScreen(habit) {

        return (
            <MyHabits key={habit.id}>
                <Trash onClick={() => deletingHabit(habit.id)}><ion-icon name="trash-outline"></ion-icon></Trash>
                <p>{habit.name}</p>
                <WeekDayButtons isSelected={habit.days.includes(0)}>D</WeekDayButtons>
                <WeekDayButtons isSelected={habit.days.includes(1)}>S</WeekDayButtons>
                <WeekDayButtons isSelected={habit.days.includes(2)}>T</WeekDayButtons>
                <WeekDayButtons isSelected={habit.days.includes(3)}>Q</WeekDayButtons>
                <WeekDayButtons isSelected={habit.days.includes(4)}>Q</WeekDayButtons>
                <WeekDayButtons isSelected={habit.days.includes(5)}>S</WeekDayButtons>
                <WeekDayButtons isSelected={habit.days.includes(6)}>S</WeekDayButtons>
            </MyHabits>

        )
    }

    function habitCreation() {
        return (
            <CreateHabit>
                <Input isLoading={isLoading} value={habitName} onChange={(e) => setHabitName(e.target.value)} />
                <WeekDayButtons isSelected={selectedWeekDays.includes(0)} onClick={() => selectingWeekDay(0)} disabled={isLoading} >D</WeekDayButtons>
                <WeekDayButtons isSelected={selectedWeekDays.includes(1)} onClick={() => selectingWeekDay(1)} disabled={isLoading} >S</WeekDayButtons>
                <WeekDayButtons isSelected={selectedWeekDays.includes(2)} onClick={() => selectingWeekDay(2)} disabled={isLoading} >T</WeekDayButtons>
                <WeekDayButtons isSelected={selectedWeekDays.includes(3)} onClick={() => selectingWeekDay(3)} disabled={isLoading} >Q</WeekDayButtons>
                <WeekDayButtons isSelected={selectedWeekDays.includes(4)} onClick={() => selectingWeekDay(4)} disabled={isLoading} >Q</WeekDayButtons>
                <WeekDayButtons isSelected={selectedWeekDays.includes(5)} onClick={() => selectingWeekDay(5)} disabled={isLoading} >S</WeekDayButtons>
                <WeekDayButtons isSelected={selectedWeekDays.includes(6)} onClick={() => selectingWeekDay(6)} disabled={isLoading} >S</WeekDayButtons>
                <CancelSaveButtonsContainer>
                    <CancelButton onClick={() => setIsCreatingHabit(false)} disabled={isLoading}>Cancelar</CancelButton>
                    <SaveButton onClick={() => saveHabit()} disabled={isLoading}>
                        {isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={35} width={50} /> : "Salvar"}
                    </SaveButton>
                </CancelSaveButtonsContainer>
            </CreateHabit>
        )
    }

    return (
        <Container>
            <Header />
            <CreateHabitButtonContainer>
                <h1>Meus hábitos</h1>
                <ButtonCreateHabit onClick={() => setIsCreatingHabit(true)}><span>+</span></ButtonCreateHabit>
            </CreateHabitButtonContainer>
            {isCreatingHabit && habitCreation()}
            {habitList.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : habitList.map(habit => puttingHabbitOnScreen(habit))}
            <Footer />
        </Container>
    )
}

export function weekButtonBackground({ isSelected }) {
    if (isSelected) {
        return "#CFCFCF";
    }

    return "#FFFFFF";
}

export function weekButtonTextColor({ isSelected }) {
    if (isSelected) {
        return "#FFFFFF";
    }

    return "#CFCFCF";
}

