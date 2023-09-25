// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`
export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
`
export const CreditCardImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 300px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: none;
  border-radius: 10px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 300;
  text-decoration: underline;
`
export const CardNumber = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 300;
`
export const CardText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 300;
`

export const CardHolderName = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 300;
`
export const PaymentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const PaymentText = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: 300;
`
export const CustomInput = styled.input`
font-family: 'Roboto';
font-size: 25px;
font-weight: 300;
border: radius: 3px;
outline: none;
width: 300px;
`
