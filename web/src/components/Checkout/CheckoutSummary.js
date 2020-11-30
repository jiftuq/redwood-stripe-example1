import { useCart } from 'src/components/Cart'
import { useCheckout, PHASE } from 'src/components/Checkout'
import { currency } from 'src/utils'

const CheckoutSummaryItem = ({ item }) => (
  <div key={item.id} className="checkout-summary-item">
    <div className="checkout-summary-item-qty">{item.qty} x</div>
    <div className="checkout-summary-item-name">{item.name}</div>
    <div className="checkout-summary-item-amount">
      {currency(item.unitAmount)}
    </div>
    <div className="checkout-summary-item-description">{item.description}</div>
  </div>
)

const CartSummary = () => {
  const { cart } = useCart()
  return (
    <>
      <h3 className="checkout-summary-title">Order Items</h3>
      {cart &&
        cart.cartItems.map((item) => (
          <CheckoutSummaryItem key={item.id} item={item} />
        ))}
      <div className="checkout-summary-total">
        Total:
        <div className="checkout-summary-total-currency">
          {currency(cart.cartTotal)}
        </div>
      </div>
    </>
  )
}

const ShippingSummary = ({ shipping, setPhase }) => {
  return (
    <>
      <hr />
      <h3 className="checkout-summary-title">
        Ship To{' '}
        <span className="text-small">
          (
          <button
            className="btn-link text-small"
            type="button"
            onClick={() => setPhase(PHASE.SET_SHIPPING)}
          >
            edit
          </button>
          )
        </span>
      </h3>
      <p>
        {shipping?.name}
        <br />
        {shipping?.address.line1}
        <br />
        {shipping?.address.line2 && (
          <>
            {shipping?.address.line2}
            <br />
          </>
        )}
        {shipping?.address.city}, {shipping?.address.state}
        {'  '}
        {shipping?.address.postalCode}
      </p>
    </>
  )
}

const PaymentSummary = () => <h3>Payment Method</h3>

export const CheckoutSummary = () => {
  const { checkout, setPhase } = useCheckout()

  return (
    <div className="checkout-summary">
      <CartSummary />
      {checkout?.customer?.shipping ? (
        <ShippingSummary
          shipping={checkout?.customer?.shipping}
          setPhase={setPhase}
        />
      ) : null}
      {checkout?.payment ? <PaymentSummary /> : null}
    </div>
  )
}
