import {Console} from "@woowacourse/mission-utils";
import {GAME_MESSAGE} from "../constants/View";

export const printStart = () => {
  Console.print(GAME_MESSAGE.start);
}

export const printEnd = () => {
  Console.print(GAME_MESSAGE.end);
}