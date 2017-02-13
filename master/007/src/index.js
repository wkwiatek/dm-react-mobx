import React from 'react'
import ReactDom from 'react-dom'
import Root from './containers/Root'
//3/ We have to set strict mode like this
import { useStrict } from 'mobx'

useStrict(true)

ReactDom.render(<Root />, document.getElementById('root'))
