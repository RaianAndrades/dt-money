import incomeImg from '../../assets/svg/income.svg'
import outcomeImg from '../../assets/svg/outcome.svg'
import totalImg from '../../assets/svg/total.svg'

import { Container } from "./styles";

export function Summary(){
    return <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeImg} alt="Entradas" />
            </header>
            <strong>R$ 1.000,00</strong>
        </div>
        <div>
            <header>
                <p>Saídas</p>
                <img src={outcomeImg} alt="Saídas" />
            </header>
            <strong>- R$ 500,00</strong>
        </div>
        <div className="highlight-background">
            <header>
                <p>Total</p>
                <img src={totalImg} alt="Total" />
            </header>
            <strong>R$ 500,00</strong>
        </div>
    </Container>
}