import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

/* Contantes */
import { HOME, ROOT, TASK, TASKS } from './CONSTANTS'

/* Páginas */
import { Home } from '../pages/Home'
import { Tasks } from '../pages/Tasks'
import { Task } from '../pages/Tasks/Task'

export const RouterConfig = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path={ROOT} component={Home} />
        <Route exact path={HOME} component={Home} />
        <Route exact path={TASK} component={Task} />
        <Route exact path={TASKS} component={Tasks} />
        <Route path="*">
          <Redirect to={ROOT} />
        </Route>
      </Switch>
    </>
  )
}