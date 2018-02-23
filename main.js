// Q1
function makeAbba(a, b) {
  return a + b + b + a;
}
console.log(makeAbba("Hi", "Bye"));
console.log(makeAbba("Yo", "Alice"));
console.log(makeAbba("What", "Up"));

// Q2
function endsLy(str) {
  var str = str.slice(-2);
  if ( str === "ly"){
    return true;
  } else {
    return false;
  }
}
console.log(endsLy("oddly"));
console.log(endsLy("y"));
console.log(endsLy("oddy"));

// Q3
function firstHalf(str) {
  var firstChar = str.charAt(0);
  var firstHalf = str.length / 2;
  var result = str.substr( firstChar, firstHalf );
  return result;
}
console.log(firstHalf("WooHoo"));
console.log(firstHalf("HelloThere"));
console.log(firstHalf("abcdef"));


// Q4
function right2(str) {
  var last2chats = str.slice(-2);
  var firstChats = str.slice(0, str.length - 2);
  return last2chats + firstChats;
}
console.log(right2("Hello"));
console.log(right2("java"));
console.log(right2("Hi"));

// Q5
function conCat(strA, strB) {
  var firstCat = strA.charAt( strA.length - 1 );
  var secondCat = strB.charAt(0);
  if ( firstCat === secondCat ){
    var firstCatSent = strA.substr(0,2);
    var result = firstCatSent.concat(strB);
    return result;
  } else {
    return strA + strB;
  }
}
console.log(conCat("abc", "cat"));
console.log(conCat("dog", "cat"));
console.log(conCat("abc", ""));

// Q6
function frontAgain(str) {
  var first2chats = str.substr(0,2);
  var last2chats = str.substr(-2);
  if ( first2chats === last2chats ){
    return true;
  } else{
    return false;
  }
}
console.log(frontAgain("edited"));
console.log(frontAgain("edit"));
console.log(frontAgain("ed"));

// Q7
function deFront(str) {
  var first2chats = str.substr(2);
  var charA = str.charAt(0);
  var charB = str.charAt(1);
  var firstMatch = charA.match(/a/);
  var secondMatch = charB.match(/b/);
  if ( firstMatch ){
    return "a" + first2chats;
  } else if ( secondMatch ){
    return "b" + first2chats;
  } else {
    return first2chats;
  }
}
console.log(deFront("Hello"));
console.log(deFront("java"));
console.log(deFront("away"));

// Q8
// 配列じゃないのに、arr.shiftとか使っても使えないもちろん
function withoutX2(str) {
  var charFirstX = str.charAt(0);
  var charSecondX = str.charAt(1);
  var firstMatch = charFirstX.match(/x/);
  var secondMatch = charSecondX.match(/x/);
  if ( firstMatch ){
    var result = str.substr(1,2);
    return result;
  } else if ( secondMatch ){
    var result1 = str.substr(0,1);
    var result2 = str.substr(2,1);
    return result1 + result2;
  } else {
    return str;
  }
}
console.log(withoutX2("xHi"));
console.log(withoutX2("Hxi"));
console.log(withoutX2("Hi"));

// Q9
function lastChars(a, b){
  var charA = a;
  var charB = b;
  var firstChar = charA.charAt(0);
  var lastChar = charB.charAt(charB.length - 1);
  if ( firstChar === "" ){
    firstChar = "@";
    return firstChar + lastChar;
  } else if ( lastChar === "" ){
    lastChar = "@";
    return firstChar + lastChar;
  } else {
    return firstChar + lastChar;
  }
}
console.log(lastChars("last", "chars"))
console.log(lastChars("yo", "java"))
console.log(lastChars("hi", ""))

// Q10
function middleTwo(str){
  // str.length -> str.length() / 2 ではない。これでエラー出まくった
  var middleOneStr = str.length / 2 - 1;
  var middleSecondStr = str.length / 2 + 1;
  var result = str.substring( middleOneStr , middleSecondStr);
  return result;
}
console.log(middleTwo("string"));
console.log(middleTwo("code"));
console.log(middleTwo("Practice"));
