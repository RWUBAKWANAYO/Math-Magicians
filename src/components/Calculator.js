import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import Display from './Display';

function Calculator() {
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleClick = (buttonName) => setState(({ obj }) => ({ obj: calculate(obj, buttonName) }));

  return (
    <div className="calculator-main-cont">
      <Display total={state.obj.total} next={state.obj.next} />
      <Buttons handleClick={handleClick} />
    </div>
  );
}

export default Calculator;
