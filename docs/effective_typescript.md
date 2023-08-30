## 아이템 2 타입스크립트 설정 이해하기

- `tsc --init` 명령어를 통해 `tsconfig.json` 설정 파일 생성합니다.
- `strict`, `noImplicitAny`, `strictNullChecks` 설정을 적용합니다.

```json
// tsconfig.json
{
  "compilerOptions": {
    ...
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
  },
}
```

## 아이템 12 함수 표현식에 타입 적용하기

- 타입스크립트에서는 함수 표현식을 사용하여 함수를 정의하는 것이 좋습니다.
- 함수의 매개변수부터 반환값까지 전체를 함수 타입으로 선언하여 선언된 함수 타입을 함수 표현식에 재사용할 수 있습니다.

```typescript
// utils/validation.ts
type Validation<T> = (input: T) => void;

export const hasRepeatedNumbers: Validation<string> = (input) => {
  const inputSet = new Set([...input]);
  if (inputSet.size !== input.length) {
    throw new Error(ERROR_MESSAGE.NO_REPEAT);
  }
};

export const isValidCode: Validation<number> = (code) => {
  if (code !== GAME_CODE.RESTART && code !== GAME_CODE.FINISH) {
    throw new Error(ERROR_MESSAGE.INVALID_CODE);
  }
};
```

## 아이템 14 타입 연산과 제너릭 사용으로 반복 줄이기

- 타입 중복은 코드 중복만큼 많은 문제를 발생시킵니다.
- 함수의 기능은 같으나, 매개변수의 타입 또는 반환하는 타입이 다를 경우 제너릭을 사용하여 하나의 함수 타입으로 정의할 수 있습니다.
- 제너릭 함수는 함수명 뒤에 `<T>`를 추가하고, `T`를 매개변수나 반환 타입으로 설정할 수 있습니다.
- 제너릭에서 `extends` 키워드를 사용하여 매개변수의 타입을 제한할 수 있습니다.

```typescript
// utils/validation.ts
// Function types
type StringValidation = (input: string) => void;
type NumberValidation = (input: number) => void;

// Use Generic
type Validation<T> = (input: T) => void;

// Use Generic with extends keyword
type Validation<T extends string | number> = (input: T) => void;
```

## 아이템 23 타입 넓히기

- 변수를 초기화할 때 타입이 명시되어 있지 않으면 타입스크립트의 타입 체커는 타입을 명시해야합니다.
- 이때 지정된 값을 가지고 할당 가능한 값들의 집합을 유추하는 과정을 '타입 넓히기'라고 합니다.
- 타입스크립트는 넓히기의 과정을 제어할 수 있도록 몇 가지 방법을 제공합니다.
  - `const` 사용하기
  - 명시적으로 타입 지정하기
  - `const` 단언문 사용하기 : 값 뒤에 `as const`를 작성하면, 타입스크립트는 최대한 좁은 타입으로 추론합니다.

```typescript
// examples
const v1 = {
  x: 1,
  y: 2,
}; // Type is { x: number; y: number; }

const v2 = {
  x: 1 as const,
  y: 2,
}; // Type is { x: 1; y: number; }

const v3 = {
  x: 1,
  y: 2,
} as const; // Type is { readonly x: 1; readonly y: 2; }

const a1 = [1, 2, 3]; // Type is number[]

const a2 = [1, 2, 3] as const; // Type is readonly [1,2,3]
```

```typescript
// constants/validation.ts
export const VALIDATION = {
  REG_EXP: /^[0-9]+$/,
  LENGTH: 3,
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  INVALID_NUMBER: 0,
} as const;
```

![](https://github.com/Bori-github/Effective_TypeScript/assets/85009583/7c5b565f-ab15-4b76-a2c1-7a6124641969)

## 아이템 44 타입 커버리지를 추적하여 타입 안전성 유지하기

- `noImplicitAny`를 설정하고 모든 암시적 `any` 대신 명시적 타입 구문을 추가해도 `any` 타입과 관련된 문제들로부터 안전하다고 할 수 없습니다.
- `any` 타입이 여전히 프로그램 내에 존재할 수 있는 경우 두 가지가 있습니다.
  - 명시적 `any` 타입
  - 서드파티 타입 선언
- `any` 타입은 타입 안전성과 생산성에 부정적 영향을 미칠 수 있으므로, 프로젝트에서 `any`의 개수를 추적하는 것이 좋습니다.

### type-coverage 패키지 활용하기

- 다음의 명령어를 통해 `any`를 추적할 수 있습니다.
  ```shell
  $ npx type-coverage
  > [any 타입이 아닌 심볼 갯수] / [총 심볼 갯수] [any 타입이 아닌 심볼의 백분율]
  ```
- `type-coverage`를 실행할 때 `--detail `플래그를 붙이면, `any` 타입이 있는 곳을 모두 출력해줍니다.
  ```shell
  $ npx type-coverage --detail
  > any 타입이 있는 위치
  > [any 타입이 아닌 심볼 갯수] / [총 심볼 갯수] [any 타입이 아닌 심볼의 백분율]
  ```

![](https://github.com/Bori-github/Effective_TypeScript/assets/85009583/a64a2cf0-3dc1-49ba-8d9e-77398e5bc0d0)

## 아이템 45 devDependencies에 typescript와 @types 추가하기

- dependencies : 애플리케이션 동작과 직접적으로 연관된 라이브러리를 포함합니다.(프로덕션 환경에서 필요)
  ```shell
  npm install 라이브러리명
  npm install --save 라이브러리명
  ```
- devDependencies : 개발할 때 필요한 라이브러리를 포함합니다.(개발 환경에서 필요)
  - devDependencies에 포함된 라이브러리는 실제 배포할 때 포함되지 않기 때문에 빌드 시간을 줄일 수 있습니다.
  - eslint, prettier와 같은 라이브러리들은 devDependencies로 포함합니다.
  ```shell
  npm install 라이브러리명 --save-dev
  npm install 라이브러리명 -D
  ```
- peerDependencies : 런타임에 필요하지만, 의존성을 직접 관리하지 않는 라이브러리를 포함합니다.

```json
// package.json
{
  ...
  "dependencies": {
    "@woowacourse/mission-utils": "^1.0.6"
  },
  "devDependencies": {
    "@babel/cli": "^7.22.10",
    "@babel/core": "^7.22.11",
    "@babel/preset-env": "^7.22.10",
    "@babel/preset-typescript": "^7.22.11",
    "@types/jest": "^29.5.4",
    "@types/node": "^20.5.3",
    "jest": "^29.6.0",
    "typescript": "^5.1.6"
  },
}
```

## 아이템 58 모던 자바스크립트로 작성하기

- 타입스크립트는 타입 체크 기능 외에, 타입스크립트 코드를 특정 버전의 자바스크립트로 컴파일하는 기능도 가지고 있습니다.
- 타입스크립트는 자바스크립트의 상위집합이기 때문에, 최신 버전의 자바스크립트 코드를 옛날 버전의 자바스크립트 코드로 변환할 수 있습니다.
- 옛날 버전의 자바스크립트 코드를 최신 버전에 자바스크립트 코드로 바꾸는 작업은 타입스크립트로 전환하는 작업으 일부로 볼 수 있습니다.

### ECMAScript 모듈 사용하기

- ES2015부터 import/export를 사용하는 ECMAScript 모듈(ES 모듈)이 표준이 되었습니다.
- ES 모듈를 사용하기 위해 프로젝트 종류에 따라 웹팩이나 ts-node 같은 도구가 필요한 경우도 있습니다.

### 프로토타입 대신 클래스 사용하기

- ES2015에 `class` 키워드를 사용하는 클래스 기반 모델이 도입되었습니다.
- 프로토타입으로 구현한 객체보다 클래스로 구현한 객체가 문법이 간결하고 직관적입니다.

### `var` 대신 `let`/`const` 사용하기

- 자바스크립트 `var` 키워드의 스코프 규칙에 문제가 있습니다.
- `var` 대신 `let`/`const`를 사용하면 스코프 문제를 피할 수 있습니다.
  - `let`/`const`는 블록 스코프를 가집니다.
- 함수 선언식은 함수 호이스팅이 수행되어 함수 선언 전에 호출해도 문제가 발생하지 않습니다.
- 호이스팅은 실행 순서를 예상하기 어렵게 만들고 직관적이지 않기 때문에 함수 표현식을 사용하여 호이스팅 문제를 피하는 것이 좋습니다.

### `for(;;)` 대신 `for-of` 또는 배열 메서드 사용하기

- `for` 루프 대신 `for-of` 루프를 사용하면 코드가 짧아지고, 인덱스 변수를 사용하지 않기 때문에 실수를 줄일 수 있습니다.
- 인덱스 변수가 필요한 경우 `forEach` 메서드를 사용할 수 있습니다.

### 함수 표현식보다 화살표 함수 사용하기

- `this` 키워드는 일반적인 변수들과는 다른 스코프 규칙을 가집니다.
- 일반적으로 `this`가 클래스 인스턴스를 참조하는 것을 기대하지만 그렇지 않은 결과를 가져오기도 합니다.
- 화살표 함수를 사용하면 상위 스코프의 `this`를 유지할 수 있습니다.
- 인라인(또는 콜백)에서는 일반 함수보다 화살표 함수가 더 직관적이며 코드도 간결해지기 때문에 가급적 화살표 함수를 사용하는 것이 좋습니다.
