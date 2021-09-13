import { format, parseISO, isValid } from 'date-fns'
import { FormState } from './Reservation'
import { ContactFormState } from './NousEcrire'

export const combineDateAndTime = (date: Date, time: Date) => {
  if (!isValid(date) || !isValid(time)) {
    return null
  }

  const dateStr = format(date, 'yyyy-MM-dd')
  const timeStr = format(time, 'HH:mm:ss')

  return parseISO(`${dateStr}T${timeStr}`).getTime() / 1e3
}

export const getFormErrors = (formData: FormState) => {
  const { startDate, startTime, name, telephone, ppl, type } = formData
  const errors: { [key: string]: string[] } = {}

  if (!name) {
    errors.name = ['Votre nom est requis']
  }

  if (!telephone) {
    errors.telephone = ['Votre numéro de téléphone est requis']
  }

  if (!ppl) {
    errors.ppl = ['Le nombre de joueur est requis']
  }

  if (!isValid(startDate)) {
    errors.startDate = ['Selectioner une date valide']
  }

  if (!isValid(startTime)) {
    errors.startTime = ['Selectioner un heure valide']
  }

  const startDateTimestamp = combineDateAndTime(startDate, startTime)

  return errors
}


export const getContactFormErrors = (formData: ContactFormState) => {
  const { name, email, sujet } = formData
  const errors: { [key: string]: string[] } = {}

  if (!name) {
    errors.name = ['Votre nom est requis']
  }

  if (!email) {
    errors.email = ['Votre courriel est requis']
  }

  if (!sujet) {
    errors.ppl = ['Le sujet est requis']
  }


  return errors
}
