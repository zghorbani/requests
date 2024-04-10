export interface Results {
  key: string;
  data: any[];
}
export interface Post {
  id: number;
  title: string;
}

export type Item = {
    key: string;
    data: any[]
};
export type Items = {
    isForce: boolean
    results: Item[]
};

export interface ContextProps {
    items: Items
    setItems: Function;
}