import React, { useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { getFormErrors } from './helpers'

import 'react-datepicker/dist/react-datepicker.css'

export interface FormState {
    startDate: Date;
    startTime: Date;
    name: string;
    telephone: string;
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
    ppl: 0,
    type: 9,
}

const Accueil: React.FC = () => {
    const [send, setSend] = useState(false)
    const [state, setState] = useState<FormState>({
        startDate: new Date(),
        startTime: new Date(),
        name: '',
        telephone: '',
        ppl: 0,
        type: 9,
        })
  const { startDate, startTime, name, telephone, ppl, type } = state
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
            <h3><b>Reservation</b></h3>

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
                        id="name" 
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
                                id="telephone"
                                value={telephone} 
                                required
                                onChange={handleChange}
                            />
                            {formErrors.telephone && fieldsState.telephone && <FormErrors errors={formErrors.telephone} />}
                        </Box>
                        <Box>
                            <BaseLabel>Nombre de joueur</BaseLabel>
                        </Box>
                        <Box>
                            <Input 
                                type="text" 
                                name="ppl" 
                                id="ppl"
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
                                        id="type" 
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
                                        id="type" 
                                        value="18"
                                        onChange={handleChange} 
                                    />
                                </RadioTextStyled>
                                <RadioTextStyled>
                                    18 trous
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
  background: #C4E9C2;
  border-radius: 25px;
  border: 2px solid #34773A;
  padding: 10px;
  color: #000000;
  padding: 10px;
  overflow: hidden;
  position: relative;
`;

const BaseLabel = styled.label`
  color: #34773A;
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
    color: #34773A;
    float: left;
    padding: 5px;
    vertical-align: middle;
`

const Box = styled.div`
  padding-bottom: 2px;
  float: left;
  width: 100%;
`

const Input = styled.input`
  background-color: #FFFFFF;
  border: 0;
  border-radius: 16px;
  box-shadow: 2px 2px #E4E4E4;
  color: #34773A;
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
  border-radius: 16px;
  box-shadow: 2px 2px #E4E4E4;
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