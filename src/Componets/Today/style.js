import styled from 'styled-components';

export const Container = styled.main`
    background-color: #F2F2F2;
    width:100vw;
    height: 100vh;
    padding: 98px 5% 110px 5%;
    h1{
        font-size: 23px;
        color: #126BA5;

    }
    h2{
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
        margin-bottom: 28px;
    }
    h4{
        font-size: 18px;
        line-height: 22px;
        color: #8FC549;
        margin-bottom: 28px
    }
`
export const Habit = styled.div`
    width: 100%;
    height: 94px;
    background-color: #FFFFFF;
    padding: 13px 13px 0 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    ion-icon{
        margin: -5px -5px;
        color: ${props => props.isDone ? "#8FC549" : "#EBEBEB"};
        border: 0;
        font-size: 80px;
    }
`
export const HabitDescriptions = styled.div`
    color: #666666;
`
export const HabitName = styled.h3`
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 7px;
`
export const HabitSequence = styled.p`
    font-size: 13px;
    line-height: 16px;
    color:#666666;
    span{
        color: ${props => props.colorGreen ? "#8FC549" : "#666666"};
    }
`
export const HabitRecord = styled(HabitSequence)`
    color: #666666;
`
