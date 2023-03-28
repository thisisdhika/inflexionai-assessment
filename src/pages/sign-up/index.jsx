import * as React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Input } from '@/components'

import './style.scss'

export default class SignUp extends React.PureComponent {
  render() {
    return (
      <main className="sign-up">
        <div className="container">
          <div className="sign-up__wrapper">
            <h1>Welcome!</h1>
            <p>Use these awesome forms to login or create new account in your project for free.</p>

            <div className="card sign-up__content">
              <h2>Register with</h2>

              <div className="sign-up__options">
                <button className="btn btn-light">
                  <Icon name="tid-facebook" />
                </button>
                <button className="btn btn-light">
                  <Icon name="tid-apple" />
                </button>
                <button className="btn btn-light">
                  <Icon name="tid-google" />
                </button>
              </div>

              <span>or</span>

              <form action="#" className="sign-up__form">
                <Input id="name" type="text" name="name" label="Name" placeholder="Your full name" />
                <Input id="email" type="email" name="email" label="Email" placeholder="Your email address" />
                <Input
                  id="password"
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Your password"
                />
                <Input id="switch" type="switch" name="switch" label="Remember me" />
                <button className="btn btn--full btn-primary mt-3">SIGN UP</button>

                <span className="sign-up__link mt-2">
                  Already have an account?{' '}
                  <Link to="../sign-in" relative="path" className="color-primary">
                    Sign in
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
