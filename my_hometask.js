'number' + 3 + 3; // here we add a string and two numbers, js concatenates them and we get the result, a string 'number33'; 

null + 3; // null is not a number, but it is converted into 0, so we add 0+3 and get the result: 3;

5 && "qwerty"; // both values are truthy, so js returns the last truthy value, or "qwerty";

+'40' + +'2' + "hillel"; // the unary plus turns 40 and 2 into numbers, we add them, then 42 is concatenated with string and we get a string "42hillel";

'10' - 5 === 6; // the result would be 'false', because js turns string 10 into a number, subtract 5, we get 5 which is not equal to 6;

true + false; // true is converted into 1 and false into 0, so we get 1+0=1;

'4px' - 3; // 4px can't be converted into a number, so we get NaN-3=NaN;

'4' - 3; // 4 is converted into a number and we get 1 as a result;

'6' + 3 ** 0; // first we exponentiate 3 and get 1, then we concatenate 6 and 1 and get 61;

12 / '6'; // string is converted into a number, 12/6=2;

'10' + (5 === 6); // 5 isn't equal to 6, so we get false, js concatenates and we get 10false; 

null == ''; // null isn't equal to undefined, so we get false;

3 ** (9 / 3); // 9/3=3, 3 exponentiated = 27;

!!'false' == !!'true'; // here we change strings to a Boolean and get true;

0 || '0' && 1; // first we compare string AND a number and get result 1, then we compare 0 OR 1 and get 1;

(+null == false) < 1; // first unary plus converts the null into a number, we get 0, then 0==false is converted into the same type: 0==0 or true, true becomes 1 in a numeric comparison, so we get 1<1, which is false;

false && true || true; // AND is evaluated before OR, so we get false, because AND returns the first falsy value, then false OR true = true because OR returns first truthy value;

false && (false || true); // here we have false OR true = true, because OR returns first truthy value, then false AND true = false, because AND returns the first falsy value;

(+null == false) < 1 ** 5; // null becomes 0, false becomes 0 too, so we have a true here, 1 ** 5 = 1, true < 1 becomes 1<1 which is equal to false.