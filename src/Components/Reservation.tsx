import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import fr from "date-fns/locale/fr"
import { getFormErrors } from './helpers'

import 'react-datepicker/dist/react-datepicker.css'

registerLocale("fr", fr)

export interface FormState {
    startDate: Date;
    startTime: Date;
    name: string;
    telephone: string;
    email: string;
    reply_to: string;
    ppl: number;
    type: number;
}

const FormError: React.FC = ({ children }) => (
    <Errors>
      {children}
    </Errors>
)

const FormErrors: React.FC<{ errors: string[] }> = ({ errors }) => {
    return (
      <Box>
        {errors.map((error) => {
            return <FormError key={error}>{error}</FormError>
        })}
      </Box>
    )
}

const initialState: FormState = {
    startDate: new Date(),
    startTime: new Date(),
    name: '',
    telephone: '',
    email: '',
    reply_to: '',
    ppl: 0,
    type: 9,
}

const GolfSvg = () => {
  return (
    <GolfSvgContainer>
      <Svg viewBox="0 0 512 512" width="24" height="24">
      <path
          d="M132.413 20.833c71.945-67.796 143.89 55.526 215.835 10.682a8.827 8.827 0 0113.682 7.326v128a8.823 8.823 0 01-3.001 6.709c-75.476 65.678-151.04-73.798-226.516-2.648V20.833z"
          fill="#E64C3C"
        />
        <path
          d="M384 313.291c-98.693-8.298-200.387-7.415-293.165 27.277C55.79 353.722 1.942 379.586 0 417.81c-2.296 48.64 67.53 67.707 109.373 77.065a765.456 765.456 0 00203.035 16.066 918.064 918.064 0 00155.454-22.246c19.95-5.738 54.378-16.242 37.605-41.136a71.597 71.597 0 00-31.514-21.981c-22.246-9.622-84.657-26.483-80.067-56.585 3.267-21.451 44.138-14.3 44.845-35.31.794-18.008-30.367-18.273-54.731-20.392z"
          fill="#71C285"
        />
        <path
          d="M132.413 432.552c19.501 0 35.31-9.881 35.31-22.069 0-12.188-15.809-22.069-35.31-22.069-19.501 0-35.31 9.881-35.31 22.069 0 12.188 15.809 22.069 35.31 22.069z"
          fill="#4C8056"
        />
        <path
          d="M132.414 414.896a8.827 8.827 0 01-8.828-8.827V20.833a8.827 8.827 0 1117.655 0v385.236a8.827 8.827 0 01-8.827 8.827z"
          fill="#ECF0F1"
        />
        <path
          d="M353.103 459.034c14.626 0 26.483-11.856 26.483-26.482s-11.857-26.483-26.483-26.483c-14.626 0-26.483 11.857-26.483 26.483 0 14.626 11.857 26.482 26.483 26.482z"
          fill="#F5EFCA"
        />
        <path
          d="M123.586 300.668h17.655v52.965h-17.655v-52.965zM123.586 194.737h17.655v52.965h-17.655v-52.965zM123.586 88.806h17.655v52.965h-17.655V88.806z"
          fill="#C03A2B"
        />
      </Svg>
    </GolfSvgContainer>
  )
}

const Accueil: React.FC = () => {
    const [send, setSend] = useState(false)
    const [state, setState] = useState<FormState>(initialState)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { startDate, startTime, name, telephone, email, reply_to, ppl, type } = state
  const [fieldsState, setFieldsState] = useState<{ [key: string]: boolean }>({})
  const formErrors = getFormErrors(state)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({
        startDate: new Date(),
        startTime: new Date(),
        name: '',
        telephone: '',
        email: '',
        reply_to: '',
        ppl: 0,
        type: 9,
    })

  const updateValue = (key: string, value: string | number | Date) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }))

    // Keep track of what fields the user has attempted to edit
    setFieldsState((prevFieldsState) => ({
      ...prevFieldsState,
      [key]: true,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'default_service', 'template_resGolfAlpine', e.target, 'user_0MjtJ2sBQ07S4Sjc8Q3zM'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
          setSend(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const handleDateChange = (key: string) => (value: Date) => {
    updateValue(key, value)
  }
  return (
    <>
        <StyledReservationCard>
            <h3><GolfSvg /><b>Reservation</b></h3>

            {send && (
                <Box>
                    <h3>Nous avons envoyé votre demande de réservation!</h3>
                </Box>
            )}
            <form id="form" onSubmit={handleSubmit}>
                <Box>
                    <BaseLabel>Date du départ</BaseLabel>
                </Box>
                <Box>
                    <ReactDatePicker 
                        customInput={<Input 
                            type="text" 
                            name="startDate" 
                            id="startDate" 
                        />} 
                        portalId="reactDatePicker" 
                        dateFormat="PPP" 
                        locale="fr"
                        name="startDate"
                        onChange={handleDateChange('startDate')}
                        selected={startDate}
                        placeholderText="YYYY/MM/DD" 
                    />
                    {formErrors.handleDateChange && fieldsState.handleDateChange && <FormErrors errors={formErrors.handleDateChange} />}
                </Box>
                <Box>
                    <BaseLabel>Heure du départ</BaseLabel>
                </Box>
                <Box>
                    <ReactDatePicker 
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        customInput={<Input 
                            type="text" 
                            name="startTime" 
                            id="startTime" 
                        />} 
                        portalId="reactDatePicker" 
                        timeCaption="Time"
                        dateFormat="ppp" 
                        locale="fr"
                        name="startTime"
                        onChange={handleDateChange('startTime')}
                        selected={startTime}
                        placeholderText="00:00" 
                    />
                    {formErrors.startTime && fieldsState.startTime && <FormErrors errors={formErrors.startTime} />}
                </Box>
                <Box>
                    <BaseLabel>Votre nom</BaseLabel>
                </Box>
                <Box>
                    <Input 
                        type="text" 
                        name="name" 
                        value={name} 
                        required
                        onChange={handleChange}
                    />
                    {formErrors.name && fieldsState.name && <FormErrors errors={formErrors.name} />}
                </Box>
                {name && (
                    <>
                        <Box>
                            <BaseLabel>Votre téléphone</BaseLabel>
                        </Box>
                        <Box>
                            <Input 
                                type="text" 
                                name="telephone" 
                                value={telephone} 
                                required
                                onChange={handleChange}
                            />
                            {formErrors.telephone && fieldsState.telephone && <FormErrors errors={formErrors.telephone} />}
                        </Box>
                        <Box>
                            <BaseLabel>Votre adresse courriel</BaseLabel>
                        </Box>
                        <Box>
                            <Input 
                                type="text" 
                                name="email" 
                                value={email} 
                                required
                                onChange={handleChange}
                            />
                            <Input
                              type="hidden"
                              name="reply_to"
                              id="reply_to"
                              value={email}
                              onChange={handleChange}
                            />
                            {formErrors.email && fieldsState.email && <FormErrors errors={formErrors.email} />}
                        </Box>
                        <Box>
                            <BaseLabel>Nombre de joueur</BaseLabel>
                        </Box>
                        <Box>
                            <Input 
                                type="text" 
                                name="ppl" 
                                value={ppl} 
                                required
                                onChange={handleChange}
                            />
                            {formErrors.ppl && fieldsState.ppl && <FormErrors errors={formErrors.ppl} />}
                        </Box>
                        <Box>
                            <BaseLabel>Droits de jeu </BaseLabel>
                        </Box>
                        <Box>
                            <TypeStyled>
                                <RadioTextStyled> 
                                    <Radio 
                                        type="radio" 
                                        name="type" 
                                        value="9" 
                                        checked
                                        onChange={handleChange} 
                                    />
                                </RadioTextStyled>
                                <RadioTextStyled>
                                    9 trous
                                </RadioTextStyled>
                                <RadioTextStyled>
                                    <Radio 
                                        type="radio" 
                                        name="type" 
                                        value="18"
                                        onChange={handleChange} 
                                    />
                                </RadioTextStyled>
                                <RadioTextStyled>
                                    18 trous (2 x 9 trous)
                                </RadioTextStyled>
                            </TypeStyled>
                        </Box>
                        <Box>
                            <CenterStyled>
                                <StyledButton 
                                    type="submit" 
                                    id="button" 
                                    value="Send Email">
                                    Envoyer
                                </StyledButton>
                            </CenterStyled>
                        </Box>
                        {send && (
                            <Box>
                                <BaseLabel>Réservation envoyé!</BaseLabel>
                            </Box>
                        )}
                    </>
                )}
            </form>
        </StyledReservationCard>
    </>
  )
}

const StyledReservationCard = styled.div`
  border: 2px;
  width: 90%;
  float: center;
  margin: 10px;
  background: linear-gradient(139.73deg, #C4E9C2 0%, #72B46F 100%);
  border-radius: 25px;
  border: 2px solid #34773A;
  padding: 10px;
  color: #000000;
  padding: 10px;
  overflow: hidden;
  position: relative;
`;

const BaseLabel = styled.label`
  color: #1C4B21;
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`

const CenterStyled = styled.div`
    align-items: center;
    text-align: center;
    
`

const TypeStyled = styled.div`
    margin-bottom: 8px;
    display: block;
`

const RadioTextStyled = styled.div`
    color: #1C4B21;
    float: left;
    padding: 5px;
    vertical-align: middle;
`

const Box = styled.div`
  padding-bottom: 2px;
  float: left;
  width: 100%;
`

const GolfSvgContainer = styled.span`
  padding-right: 0.5vw;
  position: relative;
`;

const Svg = styled.svg`
  align-self: center;
  flex-shrink: 0;
`;

const Input = styled.input`
  background-color: #FFFFFF;
  border: 0;
  border-radius: 16px;
  box-shadow: 2px 2px #E4E4E4;
  color: #1C4B21;
  display: block;
  font-size: 16px;
  height: 28px;
  outline: 0;
  padding: 0 16px;
  width: 100%;
  border: 1px solid #34773A;

  &::placeholder {
    color: #E2E2E2;
  }

  &:disabled {
    background-color: #FFFFFF;
    box-shadow: none;
    color: #FFFFFF;
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: #E7E7E7;
  }
`;


const Radio = styled.input.attrs({ type: "radio" })`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: 2;
  padding-left: 20px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #FFFFFF;
  box-shadow: 2px 2px #34773A;

  &:after {
    border-radius: 50%;
    content: "";
    height: 24px;
    left: 4px;
    position: absolute;
    top: 6px;
    width: 100%;
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: 2px 2px #34773A;
  }

  &:focus {
    outline: none;
    box-shadow: 2px 2px #34773A;
  }

  &:checked {
    background-color: #E4E4E4;
    &:after {
        background-color: #2B6E37;
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;

const StyledButton = styled.button`
  align-items: center;
  border: 1;
  margin-top: 2vh;
  border-radius: 16px;
  box-shadow: 2px 2px #1C4B21;
  border: 1px solid #34773A;
  color: #34773A;
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
`;

const Errors = styled.div`
  color: #DC0D00;
  font-size: 16px;
  font-weight:  400;
  line-height: 1.5;
`;

export default Accueil
