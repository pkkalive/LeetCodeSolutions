function palindromeNumber(num){
  if (num < 0){
    return false;
  }
  if (num >= 0 && num < 10) return true;
  const num_str = num+"";
  const end = num_str.length - 1;
  return isPalindrome(num_str, 0, end);
}

function isPalindrome(str, start, end){
  while (start <= end){
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}

console.log(palindromeNumber(121));
console.log(palindromeNumber(-121));
console.log(palindromeNumber(10));
console.log(palindromeNumber(0));