import { Input } from '@/components'
import * as React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export default class SignIn extends React.PureComponent {
  render() {
    return (
      <main className="sign-in">
        <div className="container">
          <div className="sign-in__wrapper">
            <h1>Welcome Back</h1>
            <p>Enter your email and password to sign in</p>

            <form action="#" className="sign-in__form">
              <Input id="email" type="email" name="email" label="Email" placeholder="Your email address" />
              <Input
                id="password"
                type="password"
                name="password"
                label="Password"
                placeholder="Your password"
              />
              <Input id="switch" type="switch" name="switch" label="Remember me" />
              <button className="btn btn--full btn-primary mt-3">SIGN IN</button>

              <span className="sign-in__link mt-2">
                Don't have an account?{' '}
                <Link to="../sign-up" relative="path" className="color-primary">
                  Sign up
                </Link>
              </span>
            </form>
          </div>
        </div>
      </main>
    )
  }
}
