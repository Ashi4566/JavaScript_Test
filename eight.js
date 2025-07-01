// ques 8:-  Check if a string is a palindrome

function isPalindrome(str) {
 
    const cleaned = str.replace(/\s+/g, '').toLowerCase();
 
    return cleaned === cleaned.split('').reverse().join('');
}


console.log(isPalindrome("Racecar")); 
