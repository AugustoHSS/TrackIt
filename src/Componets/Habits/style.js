import styled from 'styled-components';
import { weekButtonTextColor, weekButtonBackground } from "./index"

export const Container = styled.main`
    background-color: #F2F2F2;
    width:100vw;
    min-height: 100vh;
    padding: 98px 5% 110px 5%;
    p{
        margin-top: 20px;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`

export const ButtonCreateHabit = styled.button`
    margin-top: -6px;
    width: 40px;    
    height: 35px;
    font-size: 27px;
    background-color: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
    border: 0;
    span{
        margin-top: -2.5px;
    }
`

export const CreateHabitButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
        h1{
            font-size: 23px;
            color: #126BA5;

        }
`
export const CreateHabit = styled.div`
    border-radius: 5px;
    margin-bottom:10px;
    padding: 18px 5% 0 5%;
    width: 100%;
    height: 180px;
    background-color: #FFFFFF;
`

export const WeekDayButtons = styled.button`
    all: unset;
    margin-right:4px;
    border-radius: 5px;
    border: 1px solid #CFCFCF;   
    width: 30px;
    height: 30px;
    text-align: center;
    background-color: ${props => weekButtonBackground(props)};
    color: ${props => weekButtonTextColor(props)};;
`
export const Input = styled.input`
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    margin-bottom: 10px;
    height: 45px;
    width: 100%;
    color: #666666;
    background-color: ${props => props.isLoading ? "#F2F2F2" : "#FFFFFF"};
    pointer-events: ${props => props.isLoading ? "none" : ""};
`

export const MyHabits = styled.div`
    background: #FFFFFF;
    padding: 18px 5% 0 5%;
    margin-bottom: 10px;
    width: 100%;
    height: 91px;
    border-radius: 5px;
    position: relative;
    p{
        margin: 0 0 8px;
    }
`
export const CancelSaveButtonsContainer = styled.div`
    margin: 29px -1%;
    display: flex;
    justify-content: end;

`
export const SaveButton = styled.button`
    all: unset;
    width: 84px;
    height: 35px;
    color: #FFFFFF;
    background-color: #52B6FF;
    border-radius: 5px;
    text-align: center;
`
export const CancelButton = styled.button`
    all: unset;
    color:#52B6FF;
    width: 84px;
    height: 35px;
    margin-right: 10px;
`
export const Trash = styled.div`
    position: absolute;
    top: 11px;
    right: 10px;
    font-size: 20px;

`