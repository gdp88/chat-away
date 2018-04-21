import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Welcome u fucking lazy asses that u just wanna chat the whole fucking time!';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
