import { useCart, CartProduct } from 'src/components/Cart'

export const CartItem = ({ item }) => {
  const { updateItemQty, deleteItem } = useCart()

  const onChange = (e) => {
    const qty = parseInt(e)
    if (qty < 1) {
      updateItemQty({ id: item.id, qty: 1 })
    } else {
      updateItemQty({ id: item.id, qty: qty })
    }
  }

  return (
    <div className="cart-item">
      <CartProduct product={item} />
      <div className="cart-item-tools">
        <div className="cart-item-qty">
          Quantity:
          <input
            name="qty"
            type="number"
            min="0"
            value={item.qty || 1}
            className="cart-item-qty-field"
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </div>
        <button
          onClick={() => deleteItem({ id: item.id })}
          className="btn-subdued"
        >
          Remove
        </button>
      </div>
    </div>
  )
}
