function Trainee (props) {
             
<h2>this is Trainee</h2>
    console.log("Props:", props);
    console.log("Name:", props.name);
    console.log("Color:", props.colour);
    console.log("Size:", props.size);
    return (
    <div>
        <p> Name: {props.name}</p>
        <p>Age: {props.colour}29</p>
        <p>Sex: {props.size}</p>
        </div>
        
    );
}

export default Trainee;
