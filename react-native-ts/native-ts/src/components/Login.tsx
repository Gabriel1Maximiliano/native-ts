

export const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <div className="alert alert-info" >
            Validando...
        </div>
        <div className="alert alert-error" >
            No autenticado
        </div>
        <div className="alert alert-success" >
            No autenticado
        </div>

        <button
        className="btn btn-primary"
        >
            Login
        </button>
        <button
        className="btn btn-danger"
        >
            LogOut
        </button>
    </div>
  )
}
