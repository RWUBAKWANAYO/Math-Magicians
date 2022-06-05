import React from 'react';
import { MdFormatQuote } from 'react-icons/md';

const Quotes = () => (
  <div className="quotes-cont">
    <div>
      <MdFormatQuote className="left-quote" />
      <p>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding. -William Paul Thurston
      </p>
      <MdFormatQuote className="right-quote" />
    </div>
  </div>
);

export default Quotes;
