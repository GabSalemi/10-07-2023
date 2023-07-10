import { Link } from "react-router-dom";

function Error() {
    return <div className="error">
                Pagina 404
                <Link to="/">
                    return back
                </Link>
            </div>
}

export default Error;