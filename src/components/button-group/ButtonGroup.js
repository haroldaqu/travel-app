const ButtonGroup = ({children}) => {
    return ( 
        <div className="container d-flex justify-content-between" id="filter-cont">
            {children}
        </div>
     );
}
 
export default ButtonGroup;