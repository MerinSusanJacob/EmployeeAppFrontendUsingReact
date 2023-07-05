import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
         <div className="container-fluid">
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
         <a className="navbar-brand" href="#">Employee Dashboard</a>
            
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                        <button type="button" className="btn btn-success">Home</button>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/form">
                    <button type="button" className="btn btn-success">Employee Form</button>
                    </a>
                </li>
                </ul>
                
         </div>
         </div>
        </nav>
    </div>
  )
}

export default Header