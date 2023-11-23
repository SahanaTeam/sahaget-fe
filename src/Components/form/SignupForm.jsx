import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { signUp } from '../../redux/action/SignupAction'
import '../../styles/signup.css'
import bgimage from '../../assets/bg-1.svg'
import bgcolorimage from '../../assets/color-bg-2.svg'

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [backendError, setBackendError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await dispatch(signUp(data))
      reset()
      setBackendError(null)
      setSuccessMessage('User registered successfully. You can proceed to login.')
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const errorMessage = error.response.data.error

        setBackendError(errorMessage)
      } else {
        console.error('Error during submission:', error)
        alert('An error occurred during submission. Please try again.')
      }
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 col-lg-3 position-relative">
          <div className="mt-5 text-dark d-flex flex-column align-items-start justify-content-center">
            <div className="mt-5">
              <h2 className="signup-text mt-5 mb-4">Sign Up</h2>
              <p>Already a user?</p>
              <p>
                <Link to="/login" className="link-success">
                  Sign in
                </Link>
              </p>
            </div>

            <img
              src={bgcolorimage}
              alt="bg-color-image"
              className="bg-image img-fluid position-absolute top-0 start-0 "
            />
          </div>
        </div>
        <div className="col-md-4 col-lg-3 mx-auto">
          <div className="mt-5">
            <img src={bgimage} alt="bg-image" className="bg-image img-fluid" />
          </div>
        </div>
        <div className="col-md-4 ">
          {backendError && (
            <div className="alert alert-danger" role="alert">
              {backendError}
            </div>
          )}
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          <form className="container-fluid" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              <div className="form-group">
                <input
                  type="text"
                  name="first_name"
                  className={`form-control bg-light input-xxl ${
                    errors.first_name ? 'is-invalid' : ''
                  }`}
                  placeholder="First Name"
                  {...register('first_name', {
                    required: 'First Name is required',
                  })}
                />
                {errors.first_name && (
                  <div className="invalid-feedback">{errors.first_name.message}</div>
                )}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="last_name"
                  className={`form-control bg-light input-xxl ${
                    errors.last_name ? 'is-invalid' : ''
                  }`}
                  placeholder="Last Name"
                  {...register('last_name', {
                    required: 'Last Name is required',
                  })}
                />
                {errors.last_name && (
                  <div className="invalid-feedback">{errors.last_name.message}</div>
                )}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className={`form-control bg-light input-xxl ${
                    errors.username ? 'is-invalid' : ''
                  }`}
                  placeholder="Username"
                  {...register('username', {
                    required: 'Username is required',
                  })}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username.message}</div>
                )}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className={`form-control bg-light input-xxl ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="form-group position-relative">
                <input
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  className={`form-control bg-light input-xxl ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                  {...register('password', {
                    required: 'Password is required',
                    validate: (value) => {
                      if (value.length < 8) {
                        return 'Password must be at least 8 characters long'
                      }
                      if (!/[a-z]/.test(value)) {
                        return 'Password must contain at least one lowercase letter'
                      }
                      if (!/[A-Z]/.test(value)) {
                        return 'Password must contain at least one uppercase letter'
                      }
                      if (!/\d/.test(value)) {
                        return 'Password must contain at least one digit'
                      }
                      if (!/[!@#$%^&*()_+]/.test(value)) {
                        return 'Password must contain at least one special character'
                      }
                      return true
                    },
                  })}
                />
                <span
                  className="position-absolute end-0 top-50 translate-middle-y pe-2 password-toggle-icon"
                  onClick={handleShowPassword}>
                  {showPassword ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i className="bi bi-eye"></i>
                  )}
                </span>

                {errors.password && (
                  <div className="invalid-feedback">{errors.password.message}</div>
                )}
              </div>

              <div className="form-group position-relative">
                <input
                  placeholder="Confirm Password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={`form-control bg-light input-xxl ${
                    errors.confirm_password ? 'is-invalid' : ''
                  }`}
                  {...register('confirm_password', {
                    required: 'Confirm Password is required',
                    validate: (value) =>
                      value === getValues('password') || 'Passwords do not match',
                  })}
                />
                <span
                  className="position-absolute end-0 top-50 translate-middle-y pe-2 password-toggle-icon"
                  onClick={handleShowConfirmPassword}>
                  {showConfirmPassword ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i className="bi bi-eye"></i>
                  )}
                </span>
                {errors.confirm_password && (
                  <div className="invalid-feedback">{errors.confirm_password.message}</div>
                )}
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success btn-lg w-100">
                  Sign Up
                </button>
              </div>

              <div className="or-container d-flex align-items-center justify-content-center">
                <div className="line-separator"></div>
                <div className="or-label">Or continue with</div>
                <div className="line-separator"></div>
              </div>

              <div className="d-flex justify-content-center">
                <a className="btn btn-lg btn-google text-uppercase btn-outline" href="#">
                  <img
                    src="https://img.icons8.com/color/16/000000/google-logo.png"
                    alt="Google Logo"
                  />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SignupForm
