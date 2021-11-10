function IdCard (props) {
    const altura = props.height / 100;
    const dataNascimento = props.birth.toString().slice(0, 15);

    return (
        <div className="idCard">
            <div className='idCardPicture'>
                <img src={props.picture}alt=''/>
            </div>
            <div className='idCardText'>
                <p><b>First name</b>: {props.firstName}</p>
                <p><b>Last name</b>: {props.lastName}</p>
                <p><b>Gender</b>: {props.gender}</p>
                <p><b>Height</b>: {altura}</p>
                <p><b>Birth</b>: {dataNascimento}</p>
            </div> 
        </div>
    );
}

export default IdCard;