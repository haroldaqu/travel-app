const Marker = ({place: {photo, name}}) => {
    return ( 
        <>
            {photo && 
                <div >
                    <i className="bi bi-geo-alt-fill fs-3 text-primary"></i>
                </div>
            }
        </>
     );
}
 
export default Marker;