import { useNavigate } from "react-router-dom";
import "./comingsoon.scss"

const ComingSoon = () => {
    const history = useNavigate();

  const handleGoBack = () => {
    history(-1);
  };
  return (
    <div className="coming-soon-page">
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-6 text-center">
            <h1 className="display-4">Coming Soon!</h1>
            <p className="lead">We're working hard to bring you something awesome.</p>
            <p className="text-muted">Stay tuned for updates!</p>
            <button className="btn btn-primary" onClick={handleGoBack}>
              Go Back 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon