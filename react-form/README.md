# React의 Input
https://ko.react.dev/reference/react-dom/components/input
https://ko.react.dev/learn/reacting-to-input-with-state

## UnControlled vs Controlled
### (1) UnControlled Input
- React state를 사용하지 않고 Dom에서 input 값을 관리하는 방식
- 사용자의 입력이 발생하면 DOM 요소의 값은 사용자의 입력에 의해 변경됨
- 아래 props들은 UnControlled Input에만 적용됨
  - defaultChecked: `boolean` 타입. `type="checkbox"`, `type="radio"`에서 초기값 지정함
  - defaultValue: `string` 타입. text input에 대한 초기값 지정함
- (장점)
  - 코드 작성량이 작음
  - 간단한 폼 요소에 적합함
  - setState를 사용하지 않아도 됨
- (단점)
  - 입력 값에 대한 제어력이 제한적임
  - 유효성 검사, 값 변경 처리, 기타 로직 구현이 어려울 수 있음
  - input 값과 React state 가 일관되지 않을 수 있음
  - 컴포넌트 재사용성이 낮음
- (사용 시나리오)
  - 간단한 폼을 구현해야 하는 경우
  - 사용자 입력 값을 바탕으로 다른 작업을 수행하지 않는 경우

```
const UnControlledInput = () => {
  const inputRef = useRef();

  return <input type="text" defaultValue="Init Value" ref={inputRef}/>;
};
```

<br/>

### (2) Controlled Input
- React state를 사용하여 input 값을 직접 관리하는 방식
- 아래 props들은 Controlled Input에만 적용됨
  - checked: `boolean` 타입. `type="checkbox"`, `type="radio"`에서 선택 여부 제어
  - value: `string` 타입. text input에서 텍스트 제어 (라디오 버튼일 경우 폼 데이터 지정함)
- (장점)
  - 입력값에 대한 제어력을 제공함
  - 유효성 검사, 값 변경 처리, 기타 로직 구현이 용이함
  - input 값과 React state 값이 일관되게 유지됨
  - 컴포넌트 재사용성이 높음
- (단점)
  - 코드 양이 증가함
  - input 값 변경 시마다 setState를 호출해야 함
- (사용 시나리오)
  - 유효성 검사가 필요한 경우
  - 값 변경 시 다른 컴포넌트를 업데이트 해야하는 경우
  - 조건부 렌더링 등 복잡한 로직이 필요한 경우
  - 컴포넌트 재사용성이 중요한 경우

```
const ControlledInput = () => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleChange} />;
};
```
