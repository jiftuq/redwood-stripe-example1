import gql from 'graphql-tag'

export const schema = gql`
  type Invoice {
    id: String!
    number: String
    amountPaid: Int
    customer: String!
    customerShipping: Shipping
    lines: [LineItem!]
    paymentIntent: SetupIntent
    status: String!
    total: Int!
  }

  type LineItem {
    id: String!
    amount: Int!
    price: String
    productId: String!
    product: Product
    qty: Int!
  }

  type Query {
    invoices: [Invoice!]!
    invoice(id: String!): Invoice!
  }

  input CreateInvoiceInput {
    customer: String!
  }

  input UpdateInvoiceInput {
    status: String
  }

  type Mutation {
    createInvoice(input: CreateInvoiceInput!): Invoice!
    updateInvoice(id: String!, input: UpdateInvoiceInput!): Invoice!
    deleteInvoice(id: String!): Invoice!
  }
`
