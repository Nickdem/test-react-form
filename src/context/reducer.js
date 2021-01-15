const handlers = {
  'SET_NAME': (state, { payload }) => ({ ...state, name: payload }),
  'SET_EMAIL': (state, { payload }) => ({ ...state, email: payload }),
  'SET_PHONE': (state, { payload }) => ({ ...state, phone: payload }),
  'SET_LANGUAGE': (state, { payload }) => ({ ...state, lang: payload }),
  'SET_CHECKBOX': (state, { payload }) => ({ ...state, checkbox: payload }),
  'SET_DISABLED': (state, { payload }) => ({ ...state, disabled: payload }),
  DEFAULT: state => state
};

export function reducer(state, action) {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};