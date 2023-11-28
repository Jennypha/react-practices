//components names must be capitalised
function Friend(props) {
    //components return html
    console.log("Props:", props);
    console.log("Name:", props.name);
    console.log("Age:", props.age);
    console.log("Sex:", props.sex);
    return (
    <div>
        <p> Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Sex: {props.sex}</p>
    </div>
    );
}

export default Friend;