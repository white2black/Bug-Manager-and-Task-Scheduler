import React from 'react';
import Contact from './Contact';

import { useHistory } from 'react-router-dom';

export const Item = () => {
  let history = useHistory();
  return (
    <>
      <button onClick={() => history.goBack()}>Back</button>
    </>
  );
};

/*export const contact = () => {

  console.log("Bug_tracking/index.js");

  return (
    <div>
    <h1>Hello, world!</h1>
    </div>
  );

};*/

export default Contact;
