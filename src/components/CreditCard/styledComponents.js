import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  min-height: 100vh;
`

export const CardContainer = styled.div`
  background-color: #3b4b69;
  min-height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PaymentContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 35px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #ffd773;
  text-align: center;
  margin-top: 40px;
`

export const CreditCardBg = styled.div`
  background-image: url(https://assets.ccbp.in/frontend/hooks/credit-card-bg.png);
  background-size: cover;
  height: 300px;
  width: 400px;
  border-radius: 15px;
  margin-top: 100px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const FormContainer = styled.form`
  box-shadow: 1px 2px 4px rgba(0,0,0,0.2);
  padding: 40px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 50%
`

export const FormHeading = styled.h1`
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #344e7a;
  text-align: center;
`

export const InputElement = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #475569;
`

export const CardHolderNameHeading = styled.p`
  color: #ffffff;
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: normal;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const CardHolderName = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  margin-top: -3px;
  font-weight: bold;
`
