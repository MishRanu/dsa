"use strict";
// export const getStartTime = (blocJson, id: string) => {};

// export const getComponentsCount = (
//   blocJson,
//   type: string,
//   startTime: number,
//   endTime: number
// ) => {};

const dfs = (tree) => {
  const [id, children] = tree;
  console.log(id);
  if (!children) {
    return;
  }
  return children.map(dfs);
}

const dfs2 = (tree) => {
  const [name, children] = tree;
  if (!children) {
    return [name];
  }
  return [name, children.map(dfs2)];
}

const filter = (f, tree) => {
  if (!f(tree)) {
    return null;
  }
  const [name, children] = tree;
  if (!children) {
    return [name];
  }
  return [name, children.map((c) => filter(f, c)).filter((v) => v)]
}

const reduce = (f, tree, acc) => {
  const [, children] = tree;
  const newAcc = f(acc, tree);
  if (!children) {
    return newAcc;
  }
  return children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
}

// const tree = ['a', [['B', [['e'], ['F']]], ['C'], ['d', [['G'], ['j']]]]];
// console.log(JSON.stringify(filter(([name]) => name === name.toLowerCase(), tree)));

const tree = ['A', [['B', [['E'], ['F']]], ['C'], ['D', [['G'], ['J']]]]];

console.log(JSON.stringify(reduce((acc, n) => acc + 1, tree, 0)));