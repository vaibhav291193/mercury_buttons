function validateFormOne() {
var petName = document.form1.petName;


if(petNameValidation(petName, 5)) {
document.getElementById('successMessage').innerHTML = "Information submitted successfully!";
}
event.preventDefault();
}

function petNameValidation(petName, minlength)
{
var petNameLen = petName.value.length;
if (petNameLen < minlength)
{
return false;
}
return true;
}




function petTypeValidation(petType)
{
var petTypeValue = petType.value;
if (petTypeValue <= 0)
{
return false;
}
return true;
}

function loadPetInfo() {
document.getElementById('petInfo').innerHTML = "An animal’s eyes have the power to speak a great language.";
}

function copyText() {
alert('Inside function');
var text = document.getElementById('regNoVal');
text.select();
text..setSelectionRange(0, 99999);
document.execCommand("copy");

}