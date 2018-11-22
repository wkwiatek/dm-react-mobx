import React from 'react'
import ReactDom from 'react-dom'
import Root from './containers/Root'
import { configure } from 'mobx';

configure({ enforceActions: 'observed' });

ReactDom.render(<Root />, document.getElementById('root'))
