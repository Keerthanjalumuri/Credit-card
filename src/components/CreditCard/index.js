import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  PaymentContainer,
  Heading,
  CreditCardBg,
  FormContainer,
  FormHeading,
  InputElement,
  CardHolderNameHeading,
  CardNumber,
  CardHolderName,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [cardNumber, setNumber] = useState('')
  const onChangeCardNumber = event => {
    setNumber(event.target.value)
  }
  const onChangeName = event => {
    setName(event.target.value)
  }
  return (
    <AppContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <CreditCardBg data-testid='creditCard'>
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderNameHeading>CARDHOLDER NAME</CardHolderNameHeading>
          <CardHolderName>{name.toUpperCase()}</CardHolderName>
        </CreditCardBg>
      </CardContainer>
      <PaymentContainer>
        <FormContainer>
          <FormHeading>Payment Method</FormHeading>
          <InputElement
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <InputElement
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </FormContainer>
      </PaymentContainer>
    </AppContainer>
  )
}

export default CreditCard
