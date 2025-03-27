import {Link} from "react-router"
const ErrorPage = () => {
  return (
    <div>
        <h2>Oops... Page not found</h2>
        <a href="/">Home Anchor</a>
        <br />
        <Link to="/">Home Link</Link>
    </div>
  )
}

export default ErrorPage