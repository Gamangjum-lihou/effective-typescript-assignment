import {Console} from "@woowacourse/mission-utils";
import {GAME_MESSAGE} from "../constants/View";

type readFunctionProp = (input : string) => void;

export const readPlayerCommand = (callback: readFunctionProp) => {
  Console.readLine(GAME_MESSAGE.start, (input : string) => {
    callback(input);
  });
}

export const readRetryCommand = (callback: readFunctionProp) => {
  Console.readLine(GAME_MESSAGE.option, (input : string) => {
    callback(input);
  });
}

export const close = () => {
  return Console.close();
}
