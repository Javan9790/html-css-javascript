// 1. The validateForm function
function validateForm() {
  const orderNoRegex = /^2024\d{6}$/;
  const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const orderNo = document.getElementById('order-no').value;
  const productCode = document.getElementById('product-code').value;
  
  const quantityVal = document.getElementById('quantity').value;
  const quantityNum = Number(quantityVal);
  
  const complaintsChecked = document.querySelectorAll('#complaints-group input:checked').length > 0;
  const otherComplaintChecked = document.getElementById('other-complaint').checked;
  const complaintDesc = document.getElementById('complaint-description').value;
  
  const solutionsChecked = document.querySelectorAll('#solutions-group input:checked').length > 0;
  const otherSolutionChecked = document.getElementById('other-solution').checked;
  const solutionDesc = document.getElementById('solution-description').value;

  return {
    "full-name": fullName.trim() !== '',
    "email": emailRegex.test(email),
    "order-no": orderNoRegex.test(orderNo),
    "product-code": productCodeRegex.test(productCode),
    "quantity": quantityVal !== '' && Number.isInteger(quantityNum) && quantityNum > 0,
    "complaints-group": complaintsChecked,
    "complaint-description": !otherComplaintChecked || complaintDesc.length >= 20,
    "solutions-group": solutionsChecked,
    "solution-description": !otherSolutionChecked || solutionDesc.length >= 20
  };
}

// 2. The isValid function
function isValid(validationObj) {
  return Object.values(validationObj).every(val => val === true);
}

// --- DOM References ---
const form = document.getElementById('form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const orderNoInput = document.getElementById('order-no');
const productCodeInput = document.getElementById('product-code');
const quantityInput = document.getElementById('quantity');
const complaintsGroup = document.getElementById('complaints-group');
const complaintDescInput = document.getElementById('complaint-description');
const solutionsGroup = document.getElementById('solutions-group');
const solutionDescInput = document.getElementById('solution-description');

// Specific Event Listeners 

// Full Name
fullNameInput.addEventListener('change', () => {
  fullNameInput.style.borderColor = validateForm()["full-name"] ? 'green' : 'red';
});

// Email
emailInput.addEventListener('change', () => {
  emailInput.style.borderColor = validateForm()["email"] ? 'green' : 'red';
});

// Order No
orderNoInput.addEventListener('change', () => {
  orderNoInput.style.borderColor = validateForm()["order-no"] ? 'green' : 'red';
});

// Product Code
productCodeInput.addEventListener('change', () => {
  productCodeInput.style.borderColor = validateForm()["product-code"] ? 'green' : 'red';
});

// Quantity
quantityInput.addEventListener('change', () => {
  quantityInput.style.borderColor = validateForm()["quantity"] ? 'green' : 'red';
});

// Complaints Group (Listening on the fieldset for child checkbox changes)
complaintsGroup.addEventListener('change', () => {
  complaintsGroup.style.borderColor = validateForm()["complaints-group"] ? 'green' : 'red';
});

// Complaint Description (Dependent on #other-complaint)
complaintDescInput.addEventListener('change', () => {
  const isOtherChecked = document.getElementById('other-complaint').checked;
  if (isOtherChecked) {
    complaintDescInput.style.borderColor = validateForm()["complaint-description"] ? 'green' : 'red';
  }
});

// Solutions Group (Listening on the fieldset for child radio changes)
solutionsGroup.addEventListener('change', () => {
  solutionsGroup.style.borderColor = validateForm()["solutions-group"] ? 'green' : 'red';
});

// Solution Description (Dependent on #other-solution)
solutionDescInput.addEventListener('change', () => {
  const isOtherRadioChecked = document.getElementById('other-solution').checked;
  if (isOtherRadioChecked) {
    solutionDescInput.style.borderColor = validateForm()["solution-description"] ? 'green' : 'red';
  }
});

// --- Form Submission ---
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent standard submission for testing purposes

   const validationResults = validateForm();
  
  // Requirement: You should call isValid when you try to submit the form
              const formIsValid = isValid(validationResults);

  // Requirement: Highlight every invalid input/fieldset to red upon submission
  const fieldMapping = {
    "full-name": fullNameInput,
    "email": emailInput,
    "order-no": orderNoInput,
    "product-code": productCodeInput,
    "quantity": quantityInput,
    "complaints-group": complaintsGroup,
    "complaint-description": complaintDescInput,
    "solutions-group": solutionsGroup,
    "solution-description": solutionDescInput
  };

  for (const key in validationResults) {
    if (validationResults[key]) {
      fieldMapping[key].style.borderColor = 'green';
    } else {
      fieldMapping[key].style.borderColor = 'red';
    }
  }

  if (formIsValid) {
    console.log("Form is perfectly valid!");
  }
});