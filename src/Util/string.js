export const ContainsAny = (str, items) => {
  for (let i in items) {
    const item = items[i];
    if (str.indexOf(item) > -1) {
      return true;
    }

  }
  return false;
};
