import { gql } from '@apollo/client';

export const PAYMENT_STATUS_SUBSCRIPTION = gql`
  subscription OnPaymentStatusChanged($username: String!) {
    paymentStatusChanged(username: $username) {
      paid
    }
  }
`;
