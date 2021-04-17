import firebase from './firebase.js';

const SaveButton = (props) => {
    const handleClick = () => {
        const dbRef = firebase.database().ref();
        dbRef.push(props.currentTrivia);
    }
    console.log(props.currentTrivia)

    return(
        <>
            <button onClick={handleClick}>Save your game</button>
        </>
    )
}


export default SaveButton;