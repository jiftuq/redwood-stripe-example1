import { loadStripe } from '@stripe/stripe-js'

export const stripePromise = loadStripe(
  'pk_test_51GxylsEHtYUchzGVN9ErcrcFkPlFLgQ4bhXoSAcwW6itR5rTJWeXESUy90aGD4cbMYkZuwwVWEfVYmCytiZyqny200Sp0xu9hW'
)

export const CARD_ELEMENT_OPTIONS = {
  classes: {
    base: 'stripe-input',
    focus: 'stripe-input-focus',
  },
  style: {
    base: {
      color: '#444',
      fontFamily: 'sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
}
