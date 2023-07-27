let inputs = document.getElementsByTagName("input");

function getFormvalue() {
    //Write your code here
    let firstName = inputs[0].value;
    let lastName = inputs[1].value;
    console.log(firstName + " " +lastName);
    alert(`${firstName} ${lastName}`);
}
