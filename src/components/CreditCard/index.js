import {useState} from 'react'
import {
  AppContainer,
  CreditCardContainer,
  Heading,
  CreditCardImage,
  CardNumber,
  CardText,
  CardHolderName,
  PaymentCardContainer,
  PaymentText,
  CustomInput,
} from './styledComponents'

// Write your code here
const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }
  const onChangeCardHolderName = event => {
    setCardHolderName(event.target.value)
  }
  return (
    <AppContainer>
      <CreditCardContainer>
        <Heading>Credit Card</Heading>
        <CreditCardImage data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardText>CARDHOLDER NAME</CardText>
          <CardHolderName>{cardHolderName.toUpperCase()}</CardHolderName>
        </CreditCardImage>
      </CreditCardContainer>
      <PaymentCardContainer>
        <PaymentText>Payment Method</PaymentText>
        <CustomInput
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={onChangeCardNumber}
        />
        <CustomInput
          type="text"
          placeholder="Cardholder Name"
          value={cardHolderName}
          onChange={onChangeCardHolderName}
        />
      </PaymentCardContainer>
    </AppContainer>
  )
}

export default CreditCard
