### **Type 1: Explanation**

1. What does the expression `"cat, bat, rat".match(/b\w+/)` do?
   match "b" followed by a word
   => bat

2. What will `"123-456-7890".match(/\d{3}/)` return?
   match first occurrence of three consecutive digits
   => 123

3. What does `"hello\nworld".match(/.\n./)` return?
   match any character followed by "\n" followed by any character
   => o\nw

4. What will `"name@example.com".match(/\w+@\w+\.\w+/)` return?
   match a word followed by "@" followed by a word followed by "." followed by a word
   => name@example.com

5. What does `"file.txt".match(/\.txt/)` do?
   match "." followed by txt
   => .txt

6. What does `"red green blue".match(/green/)` do?
   match "green"
   => green

7. What will `"abcdef".match(/[a-c]/)` return?
   match a character in the range [a-c]
   => a

8. What does `"The quick brown fox".match(/q.+?k/)` return?
   match "q" followed by any character occurred 1 or more times and previous any character should occurr 0 or 1 time followed by "k"
   => quick

9. What does `"apple".match(/a[a-z]+/)` return?
   match "a" followed by any characters occurred 1 or more times in the range [a-z]
   => apple

10. What will `"a1b2c3".match(/\d+/)` return?
    match digit occurred 1 or more times
    => 1

11. What does `"good food mood".match(/o+o/)` do?
    match "o" occurred 1 or more times followed by "o"
    => oo

12. What does `"@username".match(/@\w+/)` return?
    match "@" followed by a word
    => @username

13. What does `"path/to/file".match(/\/to\//)` do?
    match "/" followed by "to" followed by "/"
    => /to/

14. What does `"1.23".match(/\d\.\d+/)` return?
    match a digit followed by "." followed by digit occurred 1 or more times.
    => 1.23

15. What will `"AB123CD".match(/[A-Z]+\d+/)` return?
    => AB123

16. What does `"hello_world".match(/\w+_\w+/)` return?
    => hello_world

17. What does `"123abc456".match(/\d{3}/)` return?
    => 123

18. What does `"My name is John".match(/name\s\w+/)` return?
    => name is

19. What will `"https://example.com".match(/https?:\/\/\w+\.\w+/)` return?
    => https://example.com

20. What does `"abcdEFGH".match(/[A-Z]+/)` return?
    => EFGH

21. What does `"abc123".match(/(\w)(\d)/)` return?
    => c1

22. What will `"hello world".match(/(\w+)\s(\w+)/)` return?
    => hello world

23. What does `"1234".match(/\d{2,3}/)` return?
    => 123

24. What will `"aaaabbb".match(/a{2,}/)` return?
    => aa

25. What does `"hello".match(/[aeiou]{2}/)` return?
    => null

26. What does `"ABCD1234".match(/[A-Z]+\d+/)` return?
    => ABCD1234

27. What does `"file_name.ext".match(/(\w+)\.(\w+)/)` return?
    => file_name.ext

28. What does `"Mississippi".match(/s{2,}/)` return?
    => ss

29. What will `"hello world".match(/(\w)(?=\s\w)/)` return?
    => o

30. What does `"2025-01-01".match(/\d{4}-(\d{2})-(\d{2})/)[2]` return?
    => 01

31. What does `"abc123".match(/(\d+)(\w+)/)` return?
    => 123

32. What does `"hello123".match(/\D+/)` return?
    => hello

33. What will `"yes no maybe".match(/(\w+)\s(\w+)\s(\w+)/)` return?
    => yes no maybe

34. What does `"color: #123456".match(/#[0-9a-fA-F]{6}/)` return?
    => "#123456"

35. What does `"aaa111bbb222".match(/([a-z]+)(\d+)/)` return?
    => aaa111

36. What will `"1,234.56".match(/\d{1,3}(,\d{3})*\.\d{2}/)` return?
    => 1,234.56

37. What does `"aabbcc".match(/a(b{2})c/)` return?
    => abbc

38. What does `"xyzz".match(/x(y(z))/)` return?
    => xyz

39. What does `"abab".match(/(ab)\1/)` return?
    => abab

40. What will `"abc123abc".match(/(abc)\d+\1/)` return?
    => abc123abc
