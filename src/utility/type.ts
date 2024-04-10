export interface Post {
  id: number;
  title: string;
}

export type Item = {[key:string]:Post[]}

export interface ContextProps {
  items: Item[];
  setItems: Function;
}
