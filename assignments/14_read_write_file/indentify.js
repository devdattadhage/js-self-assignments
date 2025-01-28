const indentify =
  (f) =>
  (...args) => {
    const oldLog = console.log;
    console.log = (...args) => oldLog(" ", ...args);
    const r = f(...args);
    console.log = oldLog;
    return r;
  };

const l3 = () => console.log("level 3");

const l2 = () => {
  console.log("level 2");
  l3();
  console.log("back to level 2");
  console.log("more console logs at this level");
};

const l1 = () => {
  console.log("level 1");
  indentify(l2)();
  console.log("back to level 1");
};

indentify(l1());
