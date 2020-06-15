import { DeleteItemActionNames } from './model/DeleteItemActionNames';

export const deleteListItem = (id: string) => ({
  type: DeleteItemActionNames.DELETE,
  id,
});
