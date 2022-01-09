import dayjs from 'dayjs'
import axios from 'axios';
import UserContext from "../../contexts/UserContext";
import { useState, useContext, useEffect } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import { Container, Habit, HabitDescriptions, HabitName, HabitSequence, HabitRecord } from "./style"
require('dayjs/locale/pt-br')

export default function Today() {
    const WeekDay = dayjs().locale('pt-br').format("dddd, DD/MM");
    const { loginResponse, setPercentDoneToday, percentDoneToday } = useContext(UserContext);
    const [todayHabitList, setTodayHabitList] = useState([])
    let countDoneHabits = 0;
    const authorization = {
        headers: {
            "Authorization": "Bearer " + loginResponse.token
        }
    }

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", authorization);
        promisse.then(answer => { setTodayHabitList(answer.data); calcPercentDone() });
        promisse.catch(answer => console.log(answer.response))
    }, [todayHabitList])

    function checkHabit(habit) {
        if (habit.done === false) {
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, authorization);
            promisse.catch((answer) => { console.log(answer.response) })
        } else {
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, authorization)
            promisse.catch((answer) => { console.log(answer.response) })
        }
    }

    function calcPercentDone() {
        const percent = (countDoneHabits / todayHabitList.length) * 100
        setPercentDoneToday(percent)
    }
    function habits(habit) {
        if (habit.done === true) {
            countDoneHabits++
        }

        return (
            <Habit isDone={habit.done} key={habit.id}>
                <HabitDescriptions>
                    <HabitName>{habit.name}</HabitName>
                    <HabitSequence colorGreen={habit.done}>Sequência atual: <span> {habit.currentSequence} {habit.currentSequence === 1 ? "dia" : "dias"}</span></HabitSequence>
                    <HabitRecord colorGreen={habit.highestSequence > 0 && habit.currentSequence === habit.highestSequence}>Seu recorde: <span>{habit.highestSequence} {habit.currentSequence === 1 ? "dia" : "dias"}</span></HabitRecord>
                </HabitDescriptions>
                <ion-icon onClick={() => checkHabit(habit)} name="checkbox"></ion-icon>
            </Habit>
        )

    }
    return (
        <Container>
            <Header></Header>
            <h1>{WeekDay}</h1>
            {percentDoneToday > 0 ? <h4>{Math.ceil(percentDoneToday)}% dos hábitos concluídos</h4> : <h2>Nenhum hábito concluído ainda</h2>}
            {todayHabitList.length === 0 ? "" : todayHabitList.map(todayHabit => habits(todayHabit))}
            <Footer></Footer>
        </Container>
    )
}