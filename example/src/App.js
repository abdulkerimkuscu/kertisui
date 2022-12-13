import React from 'react'

import { Button } from 'kertisui'
import 'kertisui/dist/index.css'


const App = () => {
  return (
    <div>
    <Button type='primary' text="Click Me" onClick = {() => window.location.href ="https://github.com/abdulkerimkuscu"} /> <br />
    <Button type='danger' text="Click Me" onClick = {() => window.location.href ="https://github.com/abdulkerimkuscu"} /> <br />
    <Button type='dashed' text="Click Me" onClick = {() => window.location.href ="https://github.com/abdulkerimkuscu"} /> <br />
    <Button type='warning' text="Click Me" onClick = {() => window.location.href ="https://github.com/abdulkerimkuscu"} /> <br />
    <Button type='default' text="Click Me" onClick = {() => window.location.href ="https://github.com/abdulkerimkuscu"} /> <br />

    </div>
  )
}

export default App
