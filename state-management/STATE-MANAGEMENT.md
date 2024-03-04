# 상태 관리 라이브러리 분석 및 비교
# State란?
- 컴포넌트는 상호작용(interaction)의 결과로 화면상에서 발생하는 <b>변화를 기억</b>하는 것 => 상태(state) 
- (참고) https://react.dev/learn/state-a-components-memory

<br/>
<br/>

## Redux, Mobx 분석 및 비교
- 클라이언트 State (전역 상태 등) + 서버 State (데이터 fetch 여부, 데이터 응답값 등) 등 전체 상태 관리 라이브러리

### MVC
<img src="./public/img/img_mvc.png" alt="" />

<br/>

### Flux
<img src="./public/img/img_flux.png" alt="" />

<br/>

### Redux (#액션, #수동)
- Flux로 부터 영감을 받음
- (Flux와 공통점) https://ko.redux.js.org/understanding/history-and-design/prior-art/
  - 모델 업데이트 로직에 집중할 수 있도록 함(Flux의 저장소(store), Refux의 리듀서(reducer)) 
  - 애플리케이션 코드가 직접 데이터를 조작하지 않고, 액션이 모든 데이터 변화를 묘사하도록 함
- (Flux와 차이점) https://ko.redux.js.org/understanding/history-and-design/prior-art/
  - redux에는 dispatcher 개념이 없음 (redux가 이벤트 에미터보다 순수 함수들에 의존하고 있기 때문에)
  - redux는 데이터의 상태를 바꾸지 않는다. (리듀서에서는 상태값을 변경하지 않고 항상 새로운 객체를 반환해야 함  => object spread({...}) / Immutable)
- (3가지 원칙) https://ko.redux.js.org/understanding/thinking-in-redux/three-principles
  - 애플리케이션의 모든 상태는 하나의 저장소안에 하나의 객체 트리 구조로 저장됨
  - 상태는 읽기 전용이다. 상태를 변화하려면 액션 객체를 전달하는 방법 뿐이다. 
    (why?) 뷰나 네트워크 콜백 등에서 직접 상태를 바꾸지 못하도록 하기 위해
  - 변화는 순수 함수로 작성되어야 한다. 이전 상태를 변경하는 대신 새로운 상태 객체를 생성해서 반환해야 함
    (리듀서는 이전 상태와 액션을 받아 다음 상태를 반환하는 순수 함수임)
    (why?) 이전 상태를 변경하지 않음으로써 상태 추적/변경 여부 확인을 가능하게 함

<img src="./public/img/img_redux.gif" alt="" />

<br/>

## Mobx (#자동, #반응)
- TFRP(Transparent Functional Reactive Programming) 을 적용하여 쉽고 확장성 있게 상태를 관리할 수 있는 라이브러리
  ※ TFRP: 상태 변화를 함수로서 다루고, 이를 사용하여 반응적으로 동작하는 프로그램을 작성하는 것을 목표로 함
- (Mobx 장점) https://ko.mobx.js.org/README.html
  - 쉽다: 미니멀하게 자바스크립트 할당문을 사용하면 됨. 비동기 데이터 변경에도 새로운 도구 없이 사용하면 됨img_
  - 렌더링 최적화를 쉽게 할 수 있음: 데이터의 모든 변경/사용은 런타임에 추적되고, 상태와 출력 사이의 모든 관계는 의존 트리를 만들어 필요한 경우에만 연산이 실행됨
  - 구조가 자유롭다
- (개념) https://ko.mobx.js.org/the-gist-of-mobx.html
  - 상태(state), 동작(action), 파생(derivation)

  <img src="./public/img/img_mobx.png" alt="" />

<br/>

## Redux vs Mobx
| | Redux | Mobx |
|-----|-----|------|
|참고|Flux|TFRP|
|state값 변경 가능|X(Immutable)|O|
|Store|한 개|여러 개 가능|
|비동기 상태변경|Redux Thunk 등 Middleware 필요|바로 가능|


<br/>
<br/>

## RTK, Zustand, Recoil 등 클라이언트(UI 상태 등) 상태 관리
### RTK (Redux ToolKit)

<br/>

### Zustand
- 단순화된 Flux 원리를 사용한 작고 빠르며 확장 가능한 상태 관리 솔루션
- store는 훅(hook)이며, 원시값, 객체, 함수 등 아무거나 넣어도 됨
- state는 불변으로(immutably) 업데이트 되어야함
- set 함수는 상태를 병합하며, 두번째 파라미터에 true 전달 시 상태 모델을 교체해버림
- redux와 다른 점
  - 간단하며, 의견이 없음(= 사용법에 대해 강제하는게 많지 않다로 이해함)
  - 상태를 다루는데 훅을 사용함
  - context providers를 앱에 래핑하지 않아도 됨
  - 비동기로 상태 변경 시 별도의 middleware없이 set 함수만 호출하면 됨
  - 상태를 자주 변경하는 곳에서 컴포넌트를 강제로 리렌더링하지 않아도 상태 부분만 바인딩되도록 subscribe function을 제공함
  => view를 직접 변경하는 곳에서 성능 개선 가능함
  https://github.com/pmndrs/zustand?tab=readme-ov-file#transient-updates-for-often-occurring-state-changes
- context와 다른 점
  - 보일러 플레이트가 적음
  - 오직 상태 변화가 있을 때만 컴포넌트 렌더링됨
  - 중앙 집중식, action 기반 상태 관리

(참고) 
- https://github.com/pmndrs/zustand
- https://ui.toast.com/posts/ko_20210812

<br/>
<br/>

## Rtk Query, Tanstack Query(React Query) 등 서버 상태 관리

(참고) https://www.youtube.com/watch?v=nkXIpGjVxWU