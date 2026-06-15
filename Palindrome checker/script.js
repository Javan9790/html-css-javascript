const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

// Clean text: remove non-alphanumeric, normalize case
function cleanText(str) {
  return str.replace(/[^a-z0-9]/gi, "").toLowerCase();
}

// Palindrome check
function isPalindrome(str) {
  const cleaned = cleanText(str);
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

button.addEventListener("click", () => {
  const text = input.value;

  // Test 4: Empty input → alert
  if (!text) {
    alert("Please input a value");
    return;
  }

  // Tests 5–19: Show result with original text preserved
  if (isPalindrome(text)) {
    result.textContent = `${text} is a palindrome.`;
  } else {
    result.textContent = `${text} is not a palindrome.`;
  }
});
