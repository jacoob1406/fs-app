export interface ListItem {
  id: number;
  text: string;
  isCompleted: boolean;
  category: string;
}

export interface ListState {
  isLoading: boolean;
  data: ListItem[];
}
