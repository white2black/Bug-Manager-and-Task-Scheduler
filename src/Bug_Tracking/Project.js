import React from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

function Contact() {
  let abc = JSON.parse(sessionStorage.getItem('user'));

  if (abc && abc.isLogin === true) {
    let proj = sessionStorage.getItem('projectName'); // what are you doing
    console.log(proj, 'Contact.js0');
    if (proj) {
      console.log(abc);

      console.log('Bug_tracking/Contact.js');
      return <Sidebar />;
    } else {
      return <Redirect to="/" />;
    }
  } else {
    return <Redirect to="/login" />;
  }
}

export default Contact;
