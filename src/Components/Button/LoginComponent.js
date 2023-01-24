import React from 'react'
import { Link } from 'react-router-dom'

const LoginComponent = () => {
  return (
    <div>
          <li className="nav-item">
              <Link to="/login" className="nav-link">
                  <i className="bi bi-grid"></i><span>Login</span>
              </Link>
          </li>
    </div>
  )
}

export default LoginComponent
