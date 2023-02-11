import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { getContactFormErrors } from '../../utils/helpers'

export interface ContactFormState {
  name: string
  email: string
  reply_to: string
  sujet: string
  message: string
}

const FormError: React.FC<{ error: string }> = ({ error }) => <Errors>{error}</Errors>

const FormErrors: React.FC<{ errors: string[] }> = ({ errors }) => {
  return (
    <Box>
      {errors.map((error) => {
        return <FormError key={error} error={error} />
      })}
    </Box>
  )
}

const initialState: ContactFormState = {
  name: '',
  email: '',
  reply_to: '',
  sujet: '',
  message: '',
}

const NousEcrire: React.FC = () => {
  const [send, setSend] = useState(false)
  const [state, setState] = useState<ContactFormState>(initialState)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, email, reply_to, sujet, message } = state
  const formErrors = getContactFormErrors(state)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () =>
    setState({
      name: '',
      email: '',
      reply_to: '',
      sujet: '',
      message: '',
    })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault()
    emailjs.sendForm('default_service', 'template_nousEcrire', e.target, 'user_0MjtJ2sBQ07S4Sjc8Q3zM').then(
      (result) => {
        console.log(result.text)
        clearState()
        setSend(true)
      },
      (error) => {
        console.log(error.text)
      },
    )
  }

  return (
    <>
      {send && (
        <Box>
          <h3>Nous avons envoyé votre message!</h3>
        </Box>
      )}
      <form id='form' onSubmit={handleSubmit}>
        <Box>
          <BaseLabel>Votre nom</BaseLabel>
        </Box>
        <Box>
          <Input type='text' name='name' id='name' required onChange={handleChange} />
          {formErrors.handleDateChange && <FormErrors errors={formErrors.handleDateChange} />}
        </Box>
        <Box>
          <BaseLabel>Votre courriel</BaseLabel>
        </Box>
        <Box>
          <Input type='text' name='email' id='email' required onChange={handleChange} />
          <Input type='hidden' name='reply_to' id='reply_to' value={email} onChange={handleChange} />
          {formErrors.handleDateChange && <FormErrors errors={formErrors.handleDateChange} />}
        </Box>
        <Box>
          <BaseLabel>Sujet</BaseLabel>
        </Box>
        <Box>
          <Input type='text' name='sujet' id='sujet' required onChange={handleChange} />
          {formErrors.handleDateChange && <FormErrors errors={formErrors.handleDateChange} />}
        </Box>
        <Box>
          <BaseLabel>Message</BaseLabel>
        </Box>
        <Box>
          <Textarea name='message' id='message' required onChange={handleChange} />
          {formErrors.handleDateChange && <FormErrors errors={formErrors.handleDateChange} />}
        </Box>
        {!send && (
          <Box>
            <CenterStyled>
              <StyledButton type='submit' id='button' value='Send Email'>
                Envoyer
              </StyledButton>
            </CenterStyled>
          </Box>
        )}
        {send && (
          <Box>
            <BaseLabel>Message envoyé!</BaseLabel>
          </Box>
        )}
      </form>
    </>
  )
}

const Box = styled.div`
  padding-bottom: 2px;
  float: left;
  width: 100%;
`

const BaseLabel = styled.label`
  color: #34773a;
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`

const CenterStyled = styled.div`
  align-items: center;
  text-align: center;
`

const Input = styled.input`
  background-color: #ffffff;
  border: 0;
  border-radius: 16px;
  box-shadow: 2px 2px #e4e4e4;
  color: #34773a;
  display: block;
  font-size: 16px;
  height: 28px;
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid #34773a;

  &::placeholder {
    color: #e2e2e2;
  }

  &:disabled {
    background-color: #ffffff;
    box-shadow: none;
    color: #ffffff;
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: #e7e7e7;
  }
`

const Textarea = styled.textarea`
  background-color: #ffffff;
  border: 0;
  border-radius: 16px;
  box-shadow: 2px 2px #e4e4e4;
  color: #34773a;
  display: block;
  font-size: 16px;
  height: 150px;
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid #34773a;

  &::placeholder {
    color: #e2e2e2;
  }

  &:disabled {
    background-color: #ffffff;
    box-shadow: none;
    color: #ffffff;
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: #e7e7e7;
  }
`

const StyledButton = styled.button`
  align-items: center;
  border: 1;
  margin-top: 2vh;
  border-radius: 16px;
  box-shadow: 2px 2px #1c4b21;
  border: 1px solid #34773a;
  color: #34773a;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  height: 24px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.plant-button--disabled):not(.plant-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`

const Errors = styled.div`
  color: #dc0d00;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`

export default NousEcrire
