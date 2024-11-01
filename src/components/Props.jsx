
const Props = ({statePtops, setStatePtops}) => {

    return(
        <>
            <h3>{statePtops}</h3>
            <button onClick={() => setStatePtops(statePtops + 2)} >Change props</button>
        </>
    )
}

export default Props;