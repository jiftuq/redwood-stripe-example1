import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ProductForm from 'src/components/Admin/ProductForm'

import { Loader } from 'src/components/UI'

export const QUERY = gql`
  query FIND_PRODUCT_BY_ID($id: String!) {
    product: product(id: $id) {
      id
      name
      description
      unitAmount
      images
    }
  }
`

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProductMutation($id: String!, $input: UpdateProductInput!) {
    updateProduct(id: $id, input: $input) {
      id
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'network-only' }
}

export const Loading = () => <Loader />

export const Success = ({ product }) => {
  const { addMessage } = useFlash()
  const [updateProduct, { loading, error }] = useMutation(
    UPDATE_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminProducts())
        addMessage('Product updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateProduct({ variables: { id, input } })
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Product {product.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProductForm
          product={product}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
