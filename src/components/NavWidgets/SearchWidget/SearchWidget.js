import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";

const SearchWidget = () => {
    const history = useHistory();
    return (
        <FontAwesomeIcon onClick={() => history.push("/buscar")} id="btnSearch" icon="search" size="lg" className="mx-2 mx-lg-3" role="button" />
    )
}

export default SearchWidget;