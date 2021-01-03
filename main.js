const billInput = document.querySelector('#bill-amount');
const serviceInput = document.querySelector('#service');
const amountOfPeople = document.querySelector('#amount-of-people');
const btnCalculate = document.querySelector('.btn-calculate');

const output = document.querySelector('.tip-output');
const tipDisplay = document.querySelector('.tip-amount');

btnCalculate.addEventListener('click', checkInputFields);

function getServiceTip(serviceInput) {
  let serviceTip;

  if (serviceInput.value === '30percent') {
    serviceTip = 30 / 100;
  } else if (serviceInput.value === '20percent') {
    serviceTip = 20 / 100;
  } else if (serviceInput.value === '15percent') {
    serviceTip = 15 / 100;
  } else if (serviceInput.value === '10percent') {
    serviceTip = 10 / 100;
  }

  return serviceTip;
}

function checkInputFields(e) {
  e.preventDefault();

  if (
    billInput.value === '' ||
    serviceInput.value === 'choose-option' ||
    amountOfPeople.value === ''
  ) {
    alert('Please enter values');
    return;
  } else {
    calculateTip();
  }
}

function calculateTip() {
  let amount = Number(billInput.value);
  let tip = getServiceTip(serviceInput);
  let people = Number(amountOfPeople.value);

  tipDisplay.classList.remove('tip-amount-hidden');
  output.textContent = '$' + ((amount * tip) / people).toFixed(2);
}
