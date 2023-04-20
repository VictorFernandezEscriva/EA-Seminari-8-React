import React from 'react';
import { Sub } from "../types"

interface Props {
  sub: Sub;
}

const exercici: React.FunctionComponent<Props> = ({ sub })=> {
  return (
    <div>
      <h2>{sub.nick}</h2>
      <img src={sub.avatar} alt={sub.nick} />
      <p>Subscribed for {sub.subMonths} months</p>
      {sub.description && <p>{sub.description}</p>}
      <p>${sub.money}</p>
    </div>
  );
};

export default exercici;
