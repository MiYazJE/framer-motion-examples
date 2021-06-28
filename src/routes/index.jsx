import Nav from 'components/Nav/Nav'
import Page1 from 'pages/Page1/Page1'
import Page2 from 'pages/Page2/Page2'
import Page3 from 'pages/Page3/Page3'
import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import useResizeObserver from 'use-resize-observer'

const Routes = () => {
  const { ref, width, height } = useResizeObserver()
  const location = useLocation()

  return (
    <div className="App" ref={ref}>
      <Nav width={width} height={height} />

      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Redirect to="/page1" />
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default Routes
