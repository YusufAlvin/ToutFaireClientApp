const userSelector = (state) => state.appReducer.user;
const viewSelector = (state) => state.appReducer.view;

const appSliceSelector = {
  userSelector,
  viewSelector,
};

export default appSliceSelector;
