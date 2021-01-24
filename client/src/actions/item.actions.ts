import { AxiosResponse } from 'axios';

import axios from '../singletons/axios';
import { ITodo } from '../interface/item.interface';

export const getItems: Function = async (): Promise<AxiosResponse> => {
  return (await axios.get("/item"));
};

export const postItem: Function = async (values: ITodo): Promise<AxiosResponse> => {
  return (await axios.post("/item", values));
}