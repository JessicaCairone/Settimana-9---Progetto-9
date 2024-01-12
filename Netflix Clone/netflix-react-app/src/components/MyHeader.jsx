import DropdownButton from './DropdownButton';
//import './MyHeader.css';


function MyHeader () {
    return (
        <div className="ms-5 d-flex mb-5">
            <div className="d-flex col-10">
            <div>
            <h1 className="text-white">Tv Shows</h1>
            </div>
            <div>
            <DropdownButton />
            </div>
            </div>
            <div className="d-flex col-2 mt-3 icons">
                <div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-list border border-white" viewBox="0 0 16 16" >
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-grid-fill border border-white" viewBox="0 0 16 16" >
        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
      </svg></div>
            </div>
        </div>
    )
}

export default MyHeader;