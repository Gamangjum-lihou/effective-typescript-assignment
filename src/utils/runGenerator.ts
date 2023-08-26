function isTask(thing: any) {
  return typeof thing === 'function';
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

function runGenerator(generator: any) {
  const gen = generator();
  whileGenerates(gen, gen.next());
}

export default runGenerator;
