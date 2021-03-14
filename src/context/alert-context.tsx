import React, { useContext, useReducer } from 'react';

interface AlertState {
  text: string;
  visible: boolean;
}

enum ActionType {
  SHOW = 'show',
  HIDE = 'hide',
  SET_TEXT = 'set_text',
}

type Action = {type: ActionType.SHOW}
  | {type: ActionType.HIDE}
  | {type: ActionType.SET_TEXT, payload: string};

const reducer = (state: AlertState, action: Action): AlertState => {
  switch (action.type) {
    case ActionType.HIDE:
      return { ...state, visible: false };

    case ActionType.SHOW:
      return { ...state, visible: true };

    case ActionType.SET_TEXT:
      return { ...state, text: action.payload };

    default:
      return state;
  }
};

interface IAlertContext {
  show: () => void;
  hide: () => void;
  setText: (text: string) => void;
  state: AlertState;
}

const AlertContext = React.createContext<IAlertContext | null>(null) as React.Context<IAlertContext>;

export const useAlertContext = useContext(AlertContext);

export const AlertProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    text: '',
    visible: false,
  } as AlertState);

  const show = () => dispatch({ type: ActionType.SHOW });
  const hide = () => dispatch({ type: ActionType.HIDE });
  const setText = (text: string) => dispatch({ type: ActionType.SET_TEXT, payload: text });

  return (
    <AlertContext.Provider value={{ show, hide, setText, state }}>
      {children}
    </AlertContext.Provider>
  );
};
