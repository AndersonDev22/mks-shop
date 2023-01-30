export interface IProducts {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
}

export interface IProductsResponse {
  products: IProducts[];
}
