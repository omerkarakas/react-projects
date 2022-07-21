import { useMutation } from '@apollo/client';
import React from 'react';

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`;

function Mutation() {
  const [createProduct, { data, error, loading }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: 'hotdog',
        quantityPerUnit: 4,
      },
    }
  );
  return (
    <div>
      <button onClick={() => createProduct()}></button>
    </div>
  );
}

export default Mutation;
