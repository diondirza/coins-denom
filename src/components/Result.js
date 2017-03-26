import React, { PropTypes } from 'react';

const Result = ({ data }) => (
  <div className="result">
    <h3>Denomination:</h3>
    <ul>
      {
        data.map((e, i) => (
          <li key={i}>
            <span className="value">{e.pretty}</span>
            <span className="qty">×{e.qty}</span>
          </li>
        ))
      }
    </ul>
  </div>
);

Result.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Result;
