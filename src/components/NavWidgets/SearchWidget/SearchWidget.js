import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import "../NavWidget.scss"

const SearchWidget = () => {
    const history = useHistory();
    return (
        <div className="widget">
            <FontAwesomeIcon onClick={() => history.push("/buscar")} id="btnSearch" icon="search" size="lg" className="mx-2 mx-lg-3" role="button" />
        </div>
    )
}

export default SearchWidget;