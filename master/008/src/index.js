import React from 'react'
import ReactDom from 'react-dom'
import Root from './containers/Root'
import { useStrict } from 'mobx'

useStrict(true)

ReactDom.render(<Root />, document.getElementById('root'))
