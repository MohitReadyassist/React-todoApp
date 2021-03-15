import { Post } from '../interfaces/Post';

export const GET_POSTS = 'GET_POSTS';

export interface GetPostsStateType {
  posts: Post[];
}

interface GetPostsActionType {
  type: typeof GET_POSTS;
  payload: Post[];
}
export type PostActionTypes = GetPostsActionType;
export function addTodo(text: string): any {
    throw new Error('Function not implemented.');
}

export function getPostsAction(text: string): any {
  throw new Error('Function not implemented.');
}

