



// === ELEMENT REFERENCES ===
const fileInput = document.querySelector('.img-upload input[type="file"]');
const previewBox = document.getElementById('imagePreview');
const previewImg = previewBox.querySelector('img');
const previewText = previewBox.querySelector('p');
const resetBtn = document.querySelector('.form-btn .btn:first-child');
const addBtn = document.querySelector('.form-btn .btn:last-child');

// === IMAGE PREVIEW FUNCTION ===
fileInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      previewImg.src = reader.result;
      previewImg.style.display = 'block';
      previewText.style.display = 'none';
    };
    reader.readAsDataURL(file);
  } else {
    resetPreview();
  }
});

// === RESET IMAGE PREVIEW ===
function resetPreview() {
  previewImg.src = '';
  previewImg.style.display = 'none';
  previewText.style.display = 'block';
  fileInput.value = '';
}

// === RESET FORM ===
resetBtn.addEventListener('click', function () {
  document.querySelector('.form-container form')?.reset?.(); // if inside <form>
  const allInputs = document.querySelectorAll('.form-content input, .form-content textarea, .form-content select');
  allInputs.forEach((input) => (input.value = ''));
  resetPreview();
});

// === SUBMIT HANDLER (example) ===
addBtn.addEventListener('click', function () {
  alert('✅ Product added successfully!');
});
























//  document.addEventListener('DOMContentLoaded', function() {
//             // Form elements
//             const form = document.getElementById('productForm');
//             const productName = document.getElementById('productName');
//             const category = document.getElementById('category');
//             const price = document.getElementById('price');
//             const stock = document.getElementById('stock');
//             const description = document.getElementById('productDescription');
//             const productImage = document.getElementById('productImage');
//             const uploadArea = document.getElementById('uploadArea');
//             const imagePreview = document.getElementById('imagePreview');
//             const previewImg = imagePreview.querySelector('img');
//             const resetBtn = document.getElementById('resetBtn');
            
//             Error elements
//             const nameError = document.getElementById('nameError');
//             const categoryError = document.getElementById('categoryError');
//             const priceError = document.getElementById('priceError');
//             const stockError = document.getElementById('stockError');
//             const descriptionError = document.getElementById('descriptionError');
            
//             Image upload functionality
//             uploadArea.addEventListener('click', function() {
//                 productImage.click();
//             });
            
//             uploadArea.addEventListener('dragover', function(e) {
//                 e.preventDefault();
//                 uploadArea.style.borderColor = '#4CAF50';
//                 uploadArea.style.backgroundColor = '#f0f9f0';
//             });
            
//             uploadArea.addEventListener('dragleave', function() {
//                 uploadArea.style.borderColor = '#ccc';
//                 uploadArea.style.backgroundColor = '';
//             });
            
//             uploadArea.addEventListener('drop', function(e) {
//                 e.preventDefault();
//                 uploadArea.style.borderColor = '#ccc';
//                 uploadArea.style.backgroundColor = '';
                
//                 if (e.dataTransfer.files.length) {
//                     productImage.files = e.dataTransfer.files;
//                     handleImageUpload(e.dataTransfer.files[0]);
//                 }
//             });
            
//             productImage.addEventListener('change', function() {
//                 if (this.files && this.files[0]) {
//                     handleImageUpload(this.files[0]);
//                 }
//             });
            
//             function handleImageUpload(file) {
//                 if (file.type.startsWith('image/')) {
//                     const reader = new FileReader();
                    
//                     reader.onload = function(e) {
//                         previewImg.src = e.target.result;
//                         previewImg.style.display = 'block';
//                         imagePreview.querySelector('p').style.display = 'none';
//                     };
                    
//                     reader.readAsDataURL(file);
//                 } else {
//                     alert('Please select a valid image file.');
//                 }
//             }
            
//             Form validation
//             function validateForm() {
//                 let isValid = true;
                
//                 Reset errors
//                 resetErrors();
                
//                 Validate product name
//                 if (!productName.value.trim()) {
//                     showError(productName, nameError);
//                     isValid = false;
//                 }
                
//                 Validate category
//                 if (!category.value) {
//                     showError(category, categoryError);
//                     isValid = false;
//                 }
                
//                 Validate price
//                 if (!price.value || parseFloat(price.value) <= 0) {
//                     showError(price, priceError);
//                     isValid = false;
//                 }
                
//                 Validate stock
//                 if (!stock.value || parseInt(stock.value) < 0) {
//                     showError(stock, stockError);
//                     isValid = false;
//                 }
                
//                 Validate description
//                 if (!description.value.trim()) {
//                     showError(description, descriptionError);
//                     isValid = false;
//                 }
                
//                 return isValid;
//             }
            
//             function showError(inputElement, errorElement) {
//                 inputElement.classList.add('input-error');
//                 errorElement.style.display = 'block';
//             }
            
//             function resetErrors() {
//                 const errorElements = document.querySelectorAll('.error');
//                 errorElements.forEach(error => {
//                     error.style.display = 'none';
//                 });
                
//                 const inputElements = document.querySelectorAll('input, select, textarea');
//                 inputElements.forEach(input => {
//                     input.classList.remove('input-error');
//                 });
//             }
            
//             Form submission
//             form.addEventListener('submit', function(e) {
//                 e.preventDefault();
                
//                 if (validateForm()) {
//                     In a real application, you would send the data to a server here
//                     const formData = {
//                         name: productName.value,
//                         category: category.value,
//                         price: price.value,
//                         stock: stock.value,
//                         description: description.value,
//                         image: productImage.files[0] ? productImage.files[0].name : 'No image'
//                     };
                    
//                     console.log('Form submitted with data:', formData);
//                     alert('Product added successfully!');
                    
//                     Reset form after successful submission
//                     resetForm();
//                 }
//             });
            
//             Reset form
//             resetBtn.addEventListener('click', resetForm);
            
//             function resetForm() {
//                 form.reset();
//                 resetErrors();
//                 previewImg.src = '';
//                 previewImg.style.display = 'none';
//                 imagePreview.querySelector('p').style.display = 'block';
//             }
//         });