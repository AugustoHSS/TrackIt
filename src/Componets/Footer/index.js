import "react-circular-progressbar/dist/styles.css";
import { Container, ProgressBarContainer } from "./style"
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
export default function Footer() {
    let percentage = 66
    return (
        <Container>
            <Link to="/habitos">Hábitos</Link>
            <Link to="/hoje">
                <ProgressBarContainer>
                    <CircularProgressbar
                        value={percentage}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            textSize: '18px',
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </ProgressBarContainer>
            </Link>
            <Link to="/historico">Histórico</Link>
        </Container>
    )

}
