//Action Creators
export const questionOpen = () => {
  return {
    type: 'QUESTIONOPEN',
  };
};
export const questionClose = () => {
  return {
    type: 'QUESTIONCLOSE',
  };
};
export const correctIncrement1 = () => {
  return {
    type: 'INCREMENT1',
  };
};
export const correctClear = () => {
  return {
    type: 'CLEAR',
  };
};
export const scoreOpen = () => {
  return {
    type: 'SCOREOPEN',
  };
};
export const scoreClose = () => {
  return {
    type: 'SCORECLOSE',
  };
};
