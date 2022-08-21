// function getInputFieldValueById(inputFieldId) {
//     const inputFiled = document.getElementById(inputFieldId);
//     const inputFiledValueString = inputFiled.Value;
//     const inputFiledValue = parseFloat(inputFiledValueString);
//     inputFiled.Value = '';
//     return inputFiledValue;
// }

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}


function getTextElementvalueById(elementId) {
    const textElement = document.getElementById(elementId);
    const elementValueString = textElement.innerText;
    const textElementValue = parseFloat(elementValueString);
    return textElementValue;


}
function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}