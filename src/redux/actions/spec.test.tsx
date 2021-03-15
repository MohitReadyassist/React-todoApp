import { GET_POSTS, PostActionTypes } from '../types/PostTypes';

describe('PostActionTypes ', () => {
  it('should create an action to getPost', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: GET_POSTS, 
      text
    }
    
  })
})