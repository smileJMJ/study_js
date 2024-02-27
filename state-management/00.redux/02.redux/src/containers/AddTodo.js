import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if(!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">ADD Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
/**
 * connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
 * mapStateToProps : 리덕스 안의 상태를 컴포넌트의 props로 넘겨주는 함수
 * mapDispatcherToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주는 함수
 */