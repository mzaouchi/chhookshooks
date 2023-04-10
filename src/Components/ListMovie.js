import CardMovie from "./CardMovie"

const ListMovie=({movies})=>{
    return(
        <div className="iheb">
            {
                movies.map(el=><CardMovie el={el}/>)
            }
        </div>
    )
}

export default ListMovie