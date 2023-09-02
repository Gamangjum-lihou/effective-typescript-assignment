function runGenerator(generator: any) {
  const gen = generator();
  whileGenerates(gen, gen.next());
}

function whileGenerates(gen: any, prevGenResult: any) {
  if (isTask(prevGenResult.value)) {
    const task = prevGenResult.value;
    const resolve = (...args: any) => whileGenerates(gen, gen.next(...args));
    task(resolve); // run callback
  } else if (!prevGenResult.done) {
    whileGenerates(gen, gen.next(prevGenResult.value));
  }
}

function isTask(thing: string) {
  return typeof thing === 'function';
}

export default runGenerator;
