/**
 * Flux
 * Action -> Dispatcher -> Store(Model) -> View 
 * - 단방향 데이터 흐름 (예측가능성 ↑)
 * - acion type과 action type별 callback을 dispatcher에 미리 지정 후, 
 * action 발생 시, 해당 callback 실행
 */

export default {
  GET_POSTS: 'GET_POSTS'
};