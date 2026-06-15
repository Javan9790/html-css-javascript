
    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');
const limit = 50;
    textInput.addEventListener('input', () => {
        if (textInput.value.length > limit) {
            textInput.value = textInput.value.substring(0, limit); 
        } 
        const currentLength = textInput.value.length;
        charCount.textContent = `Characters: ${currentLength}/${limit}`;
    });
    