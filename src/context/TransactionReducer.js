// Reducer Function

const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [
        ...state,
        {
          name: action.name,
          amount: action.amount,
          id: action.id,
        },
      ];
    case "DELETE_TRANSACTION": {
      return action.newState;
    }
    default:
      return state;
  }
};
export default TransactionReducer;
