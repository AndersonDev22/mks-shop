import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';

import { IProductsResponse } from '../types/products';

const fetchData = async (): AxiosPromise<IProductsResponse> => {
  const response = await axios.get<IProductsResponse>(
    'https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC'
  );
  return response;
};

export function UseQueryProducts() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['products']
  });

  return {
    ...query,
    data: query.data?.data
  };
}
