import { selector } from 'recoil';
import { boardState } from './atoms';


export const getBoardSelector = selector({
  key: "board/get",
  get: async () => {
    try{
      const result = await fetch('http://localhost:4000/board');
      // console.log('result', await result.json());
      return result.json();
    } catch (err) {
    	throw err;
    }
  },
  set: ({ set }, newValue)=> {
    console.log('WWWWWWW', newValue)
    set(boardState, newValue)
  }
});