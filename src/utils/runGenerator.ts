function runGenerator(generator: any) {
  const gen = generator();
  whileGenerates(gen, gen.next());
}

function whileGenerates(gen: Generator<any, any, any>, prevGenResult: IteratorResult<any, any>) {
  if (isTask(prevGenResult.value)) {
    const task = prevGenResult.value;
    const resolve = (...args: [] | [any]) => whileGenerates(gen, gen.next(...args));
    task(resolve); // run callback
  } else if (!prevGenResult.done) {
    whileGenerates(gen, gen.next(prevGenResult.value));
  }
}

function isTask(thing: unknown) {
  return typeof thing === 'function';
}

export default runGenerator;
