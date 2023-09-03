# Item 2 타입스크립트 설정 이해하기

1. 타입스크립트 설정은 커맨드 라인을 이용하기 보다는 tsconfig.json을 사용하는 것이 좋습니다.
2. 자바스크립트 프로젝트를 타입스크립트로 전환하는 게 아니라면 noImplicitAny를 설정하는 것이 좋습니다.
3. "undefined"는 객체가 아닙니다." 같은 런타임 오류를 방지하기 위해 strictNullChecks를 설정하는 것이 좋습니다.
4. 타입스크립트에서 엄격한 체크를 하고 싶다면 strict 설정을 고려해야 합니다.

> tsconfig.json

```json
"compilerOptions": {
    "composite": true ,
    "target": "es2016",
    "module": "commonjs",
    "typeRoots": [
      "./types",
      "./node_modules/@types"
    ],
    "declarationDir": "./types",
    "preserveValueImports": false,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
```

# Item 8 타입 공간과 값 공간의 심벌 구분하기

- class나 enum 같은 키워드는 타입과 값 두 가지로 사용될 수 있습니다.
- typeof, this 그리고 많은 다른 연산자들과 키워드들은 타입 공간과 값 공간에서 다른 목적으로 사용될 수 있습니다.

> Controller/index.ts

```ts
import View from '../View';
import Model from '../Model/index';
import runGenerator from '../utils/runGenerator';
import { SELECT_FINISH } from '../constants/System';

class BaseballController {
  #view: typeof View;
  #model: Model;

  constructor() {
    this.#view = View;
    this.#model = new Model();
  }

  // ...
}

export default BaseballController;
```

# Item 11 잉여 속성 체크의 한계 인지하기

- 객체 리터럴을 변수에 할당하거나 함수에 매개변수로 전달할 때 잉여 속성 체크가 수행됩니다.
- 잉여 속성 체크는 오류를 찾는 효과적인 방법이지만, 타입스크립트 타입 체커가 수행하는 일반적인 구조적 할당 가능성 체크와 역할이 다릅니다. 할당의 개념을 정확히 알아야 잉여 속성 체크와 일반적인 구조적 할당 가능성 체크를 구분할 수 있습니다.
- 잉여 속성 체크에는 한계가 있습니다. 임시 변수를 도입하면 잉여 속성 체크를 건너뛸 수 있다는 점을 기억해야 합니다.

> Model/index.ts

```ts
class BaseballModel {
  #computerNumbers: number[];

  #score: { ball: number; strike: number };

  constructor() {
    this.#computerNumbers = [];
    this.#score = { ball: 0, strike: 0 };
  }
  // ...
}
```

# Item 12 함수 표현식에 타입 적용하기

- 매개변수나 반환 값에 타입을 명시하기보다는 함수 표현식 전체에 타입 구문을 적용하는 것이 좋습니다.
- 만약 같은 시그니처를 반복적으로 작성한 코드가 있다면 함수 타입을 분리해 내거나 이미 존재하는 타입을 찾아보도록 합니다. 라이브러리를 직접 만든다면 공통 콜백에 타입을 제공해야 합니다.

> validator/GameCommand.ts

```ts
import ValidationError from '../error/ValidationError';
import { ERROR_MESSAGE } from '../../constants/Messages';

type CheckFn = (input: string) => void;

export const checkNumber: CheckFn = input => {
  if (/\D/.test(input)) {
    throw new ValidationError(ERROR_MESSAGE.only_number);
  }
};

export const checkLength: CheckFn = input => {
  if (input.length !== 1) {
    throw new ValidationError(ERROR_MESSAGE.length_one);
  }
};

export const checkOneOrTwo: CheckFn = input => {
  if (!/1|2/.test(input)) {
    throw new ValidationError(ERROR_MESSAGE.one_or_two);
  }
};
```

# Item 19 추론 가능한 타입을 사용해 장황한 코드 방지하기

- 타입스크립트가 타입을 추론할 수 있다면 타입 구문을 작성하지 않는 게 좋습니다.
- 이상적인 경우 함수/메서드의 시그니처에는 타입 구문이 있지만, 함수 내의 지역 변수에는 타입 구문이 없습니다.
- 추론될 수 있는 경우라도 객체 리터럴과 함수 반환에는 타입 명시를 고려해야 합니다.
  - 이는 내부구현의 오류가 사용자 코드 위치에 나타나는 것을 방지해 줍니다.

> RandomNumberGenerator.ts

```ts
import { Random } from '@woowacourse/mission-utils';
import { GENERATOR } from '../constants/System';

const RandomNumberGenerator = {
  generateRandomNumber(): number[] {
    const computer = new Set<number>();
    while (computer.size < GENERATOR.pick_count) {
      const number = Random.pickNumberInRange(GENERATOR.start_number, GENERATOR.end_number);
      computer.add(number);
    }
    return [...computer];
  },
};

export default RandomNumberGenerator;
```

> OutputView.ts

```ts
export interface PrintHint {
  ball: number;
  strike: number;
}

printHint({ ball, strike }: PrintHint) {
    if (!ball && !strike) {
      return Console.print(OUTPUT_MESSAGE.noting);
    }
    if (ball && strike) {
      return Console.print(OUTPUT_MESSAGE.ball_and_strike(ball, strike));
    }
    if (strike) {
      return Console.print(OUTPUT_MESSAGE.strike(strike));
    }
    return Console.print(OUTPUT_MESSAGE.ball(ball));
  },
```

# Item 39 any를 구체적으로 변형해서 사용하기

- any를 사용할 때는 정말로 모든 값이 허용되어야만 하는지 면밀히 검토해야합니다.
- any보다 더 정확하게 모델링할 수 있도록 any[] 또는 {[id: string]: any} 또는 () => any처럼 구체적인 형태를 사용해아 합니다.
  > View/index.ts

```ts
  readGameNumbers<T extends (arg: string) => unknown>(callback: T) {
    Console.readLine(INPUT_MESSAGE.game_number, userInput => {
      callback(Validator.checkGameNumbers(userInput));
    });
  },

  readGameCommand<T extends (arg: string) => unknown>(callback: T) {
    Console.readLine(INPUT_MESSAGE.game_command, userInput => {
      callback(Validator.checkGameCommand(userInput));
    });
  },
```

# Item 44 타입 커버리지를 추적하여 타입 안정성 유지하기

- noImplicitAny가 설저되어 있어도, 명시적 any 또는 서드파티 타입 선언(@types)을 통해 any 타입은 코드 내에 여전히 존재할 수 있다는 점을 주의해야 합니다.
- 작성한 프로그램의 타입이 얼마나 잘 선언되었는지 추적해야 합니다. 추적함으로써 any의 사용을 줄여 나갈 수 있고 타입 안전성을 꾸준히 높일 수 있습니다.

<img width="265" alt="image" src="https://github.com/Gamangjum-lihou/effective-typescript-study/assets/76567238/642c47e9-4351-4bb3-8cc8-a490cc27e90e">

# Item 45 devDependencies에 typescript와 @types 추가하기

- 타입스크립트를 시스템 레벨로 설치하면 안 됩니다. 타입스크립트를 프로젝트의 devDependencies에 포함시키고 팀원 모두가 동일한 버전을 사용하도록 해야하 합니다.
- @types 의존성은 dependencie가 아니라 devDependenices에 포함시켜야 합니다.

> package.json

```json
"devDependencies": {
    "eslint": "^8.48.0",
    "eslint-config-hijacking-ts": "^0.3.0",
    "eslint-config-prettier": "^9.0.0",
    "husky": "^8.0.3",
    "jest": "^29.6.0",
    "prettier": "^3.0.3",
    "typescript": "^5.2.2"
  },
```
