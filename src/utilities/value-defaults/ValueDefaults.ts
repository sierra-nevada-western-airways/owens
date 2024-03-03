export const ValueDefaults = {
  Number: 0,
  String: "",
  Boolean: false,
  Date: new Date(),
  Array: <T>(): Array<T> => new Array<T>(),
};
