# [Effective Typescript] TS_BASEBALL

## item 5. any 타입 지양하기
* any 타입을 사용하면 타입 체커와 타입스크립트 언어 서비스를 무력화시켜버립니다. any 타입은 진짜 문제를 감추며, 개발 경험을 나쁘게하고, 타입 시스템의 신뢰도를 떨어뜨립니다.

## item 17. 변경 관련된 오류 방지를 위해 readonly 사용하기
```ts
export const GAME_SIGN = Object.freeze({
  strike: '스트라이크',
  ball: '볼',
  nothing: '낫싱',
});
```
**Object.freeze()를 통해 readonly 반환**
* readonly를 사용하면 변경하면서 발생하는 오류를 방지할 수 있고, 변경이 발생하는 코드도 쉽게 찾아낼 수 있습니다.

## item 27. 함수형 기법과 라이브러리로 타입 흐름 유지하기
```ts
setNumber(input: string) {
  this.#number = input.split('').map(Number);
}
```
* 타입 흐름을 개선하고, 가독성을 높이고, 명시적인 타입 구문의 필요성을 줄이기 위해 직접 구현하기보다는 내장된 함수형 기법과 로대시같은 유틸리티 라이브러리를 사용하는게 좋습니다.

## item 38. any 타입은 가능한 한 좁은 범위에서만 사용하기
* 의도치 않은 타입 안전성의 손실을 피하기 위해서 any의 사용 범위를 최소한으로 좁혀야 합니다.
* 함수의 반환 타입이 any인 경우 타입 안전성이 나빠집니다. 따라서 any타입을 반환하면 절대 안됩니다.
* 강제로 타입 오류를 제거하려면 any 대신 @ts-ignore 사용하는게 좋습니다.

## item 58. 모던 자바스크립트로 작성하기
### ECMAScript 모듈 사용하기
```ts
import {GENERATE_NUMBER} from '../constants/Computer';
import {Random} from '@woowacourse/mission-utils';

export default class Computer {
  ...
}
```
* ES 모듈 시스템은 ts에서도 잘 동작하며, 모듈 단위로 전환할 수 있게 해주기 때문에 점진적 마이그레이션이 원활해집니다.

### 함수 표현식보다 화살표 함수 사용하기
```ts
  start = () => {
    this.#computer = new Computer();
    this.#player = new Player();
    printStart();
    readPlayerCommand(this.sendPlayerCommand);
  };

  sendPlayerCommand = (input: string) => {
    this.#player.setNumber(input);
    this.check();
  };
```

* 화살표 함수를 사용해 상위 스코프의 this를 유지할 수 있습니다.
* 또, 인라인(또는 콜백)에서는 일반 함수보다 화살표 함수가 더 직관적이며 코드도 간결해집니다.

`noImplicitThis`/`strict`옵션을 설정하면 ts가 this 바인딩과 관련된 오류를 표시해줍니다.

