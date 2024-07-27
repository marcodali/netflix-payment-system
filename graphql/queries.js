import { gql } from '@apollo/client';

export const PAYMENT_STATUS_SUBSCRIPTION = gql`
  subscription OnPaymentStatusChanged($id: ID!) {
    onPaymentStatusChanged(id: $id) {
      payment_status
    }
  }
`;
