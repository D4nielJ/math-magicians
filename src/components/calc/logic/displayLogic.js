const displayLogic = (total, next, operation) => {
  let display = 0;
  let holder = 0;
  let operationChar = 0;
  if (operation) {
    operationChar = operation;
  }
  if (total) {
    display = total;
  }
  if (next) {
    display = next;
  }
  if (total && operation) {
    display = ' ';
    holder = total;
    if (next) {
      display = next;
    }
  }
  return { display, holder, operationChar };
};

export default displayLogic;
