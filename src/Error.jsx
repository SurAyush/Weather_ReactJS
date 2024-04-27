import './Error.css'

function Error({err})
{
    if(err)
        return(
        <p className='Error'>No such place exists!!!</p>
        );
    else
        return(<></>);
}

export default Error;