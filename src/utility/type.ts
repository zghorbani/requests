export interface Post {
  id: number;
  title: string;
}

export type Item = {
  key: string;
  data: Post[];
};
export type Items = {
  isForce: boolean;
  results: Item[];
};

export interface ContextProps {
  items: Items;
  setItems: Function;
}
