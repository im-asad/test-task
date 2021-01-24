export interface ITodo {
  todo: string;
  checked: boolean;
}

export interface IItemListState {
  isModalOpen: boolean;
}

export interface IItemListProps {}

export interface IFormProps {
  onSubmit: (values: ITodo) => Promise<void>;
}

export interface IItemContext {
  items: ITodo[];
  getItems: () => void;
}