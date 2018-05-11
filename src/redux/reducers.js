import counter from './reducers/counter';

// reducer就是纯函数，接收state 和 action，然后返回一个新的 state。
export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action)
  }
}