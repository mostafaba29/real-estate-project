import '../assets/styles/components/pagenation.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
export default function Pagenation (){
    return (
        <div className="pagination">
        <div className="info">1-20 of 250+ properties available</div>
            <a href="#" className="prev"><FontAwesomeIcon icon={faAngleLeft}/></a>
            <a href="#" className="page">1</a>
            <a href="#" className="page active">2</a>
            <span className="ellipsis">...</span>
            <a href="#" className="page">20</a>
            <a href="#" className="next"><FontAwesomeIcon icon={faAngleRight}/></a>
        </div>
    )
}