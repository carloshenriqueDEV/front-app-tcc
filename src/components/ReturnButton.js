
import { Link } from 'react-router-dom';

function ReturnButton({returnTo}) {
    return  <Link className="btn btn-primary float-end " to={returnTo}><i className="bi bi-arrow-90deg-left"></i></Link>
}

export default ReturnButton;