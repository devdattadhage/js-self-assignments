1. ```isLeapYear(year)``` function is working but it can be written in better a way.

2. Inconsistency in spacing and leaving line in one function before loop and not in other.

3. ```isSubStringPresent()``` function name is not good.
```isSubstring()``` and ```isSubStringPresent()``` both function name signify the same meaning, actually it's matching the characters at specific positions.

4. Your forloop in ```isSubstring()``` is executing the program even after it is not needed. You are checking for undefined.

5. You can make different functions for testing diffferent test cases. you can also make different functions for testing different functions. you have'nt write all test cases.

6. In ```getYear(format, date)```, ```getMonth(format, date)``` and ```getDay(format, date)``` function instead of while loop, you can use for loop as in functions you can get early exits.

7. In ```isDayValid(day, month, year)``` function checking ```monthSet1``` is not necessarily needed, rather do some changes and you can get rid of multiple checks. 

8. In ```isDateFormatValid(format, date)``` function you are not checking date length as well as spaces ```eg. '01-01-  24'```.