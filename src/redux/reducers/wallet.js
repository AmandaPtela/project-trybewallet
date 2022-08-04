// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialStateWallet = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  exchange: '',
  currenciesValues: [],
  valorFinal: '',
};

export default function wallet(state = initialStateWallet, action) {
  if (action.type === 'walletExpense') {
    return {
      ...state,
      expenses: action.value,
    };
  }

  if (action.type === 'addCurrencies') {
    return {
      ...state,
      currencies: action.value,
    };
  }

  if (action.type === 'exchange') {
    return {
      ...state,
      exchange: action.value,
    };
  }

  if (action.type === 'valoresCambio') {
    return {
      ...state,
      currenciesValues: action.value,
    };
  }

  if (action.type === 'valorFinal') {
    return {
      ...state,
      valorFinal: action.value,
    };
  }

  return state;
}
