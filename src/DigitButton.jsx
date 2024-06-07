import { ACTIONS } from './Calculator';

export default function DigitButton({ digit, dispatch }) {
  return (
    <button onClick={ () => dispatch({ type: ACTIONS.NUMBER, payload: { digit } }) }>
      {digit}
    </button>
  );
}
