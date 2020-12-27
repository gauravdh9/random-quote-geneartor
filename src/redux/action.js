export const Myaction = {
  Fetch: "Fetch",
  Change: "Change",
};

export const Fetchaction = (quotes) => {
  return { type: Myaction.Fetch, payload: quotes };
};
export const Changeaction = (quote, author) => {
  return { type: Myaction.Change, payload: { quote, author } };
};
