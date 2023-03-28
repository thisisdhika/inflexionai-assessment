import * as React from 'react'
import clsx from 'clsx'
import { has, omit } from 'lodash-es'

import './style.scss'

export const Input = React.forwardRef(
  (
    {
      id,
      size,
      type,
      label,
      feedback,
      addOnLeft,
      addOnRight,
      className,
      controlProps,
      isInvalid,
      isDisabled,
      ...restProps
    },
    ref
  ) => {
    const defaultId = React.useId()
    const inputRef = React.useRef(ref)

    const [value, setValue] = React.useState()

    const inputId = React.useMemo(() => (!id ? defaultId : id), [id, defaultId])

    const handleChange = React.useCallback(
      (e) => {
        const { currentTarget } = e
        switch (type) {
          case 'switch':
            setValue(currentTarget.checked)
            break

          default:
            setValue(currentTarget.value)
            break
        }

        if (has(restProps, 'onChange')) onChange(e)
      },
      [type, restProps]
    )

    const renderInputElement = () => {
      switch (type) {
        case 'switch':
          return (
            <label className={clsx('switch', className)} {...(!!value ? { 'data-checked': true } : {})}>
              <input
                type="checkbox"
                id={inputId}
                ref={inputRef}
                aria-invalid={isInvalid}
                aria-disabled={isDisabled}
                className={clsx('switch__input')}
                aria-describedby={`${inputId}-feedback`}
                {...restProps}
                defaultChecked={false}
                onChange={handleChange}
              />
              <span
                aria-hidden="true"
                className="switch__track"
                {...(!!value ? { 'data-checked': true } : {})}
              >
                <span className="switch__thumb" {...(!!value ? { 'data-checked': true } : {})}></span>
              </span>
            </label>
          )

        default:
          return (
            <input
              type={type}
              id={inputId}
              ref={inputRef}
              aria-invalid={isInvalid}
              aria-disabled={isDisabled}
              className={clsx('input', `input--${size}`, className)}
              aria-describedby={`${inputId}-feedback`}
              {...restProps}
              defaultValue={value}
              onChange={handleChange}
            />
          )
      }
    }

    return (
      <div
        role="group"
        className={clsx(
          'form-control',
          ['switch'].includes(type) && 'form-control--inline',
          controlProps?.className
        )}
        {...omit(controlProps, 'className')}
      >
        {!!label && type !== 'switch' && (
          <label id={inputId} htmlFor={inputId} className={clsx('form__label', `form__label--${type}`)}>
            {label}
          </label>
        )}
        {React.isValidElement(addOnLeft) && (
          <div className={clsx('form-control__addon', 'form-control__addon--left')}>{addOnLeft}</div>
        )}
        {renderInputElement()}
        {React.isValidElement(addOnRight) && (
          <div className={clsx('form-control__addon', 'form-control__addon--right')}>{addOnRight}</div>
        )}
        {!!label && type === 'switch' && (
          <label id={inputId} htmlFor={inputId} className={clsx('form__label', `form__label--${type}`)}>
            {label}
          </label>
        )}
        {isInvalid && !!feedback && (
          <div id={`${inputId}-feedback`} aria-live="polite" className="form__error-message">
            {feedback}
          </div>
        )}
      </div>
    )
  }
)

Input.defaultProps = {
  size: 'md',
  type: 'text',
  isInvalid: false,
  addOnLeft: null,
  addOnRight: null,
}
