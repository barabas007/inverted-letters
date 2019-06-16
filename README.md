# inverted-letters 

# ПОЛИНДРОМ

## Палиндром
 Палиндром — это слово, предложение или последовательность символов, которая читается слева
 направо так же, как и справа налево. 
 Например, «racecar» и «Anna» являются палиндромами, а «Table» и «John» — нет.

## Формулировка задачи
Дана строка, нужно написать функцию, которая возвращает значение true, если строка —
палиндром, и false, если это не так. 
При решении задачи необходимо учитывать пробелы и знаки препинания. Пример:

palindrome('racecar')  ===  true


palindrome('table')  ===  false

## Логическое решение задачи


 Эта задача строится на идее перевернуть строку задом наперёд. 
 Если обратная строка совпадает с исходной, то это палиндром, и функция должна вернуть значение true. 
 И наоборот, если обратная строка не совпадает с исходной, функция должна вернуть значение false.
 
 ## Практическое решение
 
 Начните с преобразования символов входной строки в символы нижнего регистра. Поскольку вы собираетесь 
 сравнивать каждыйсимвол исходной строкис символами перевёрнутой строки, 
 единый регистр гарантирует, что сравнение будет сосредоточено лишь на сравнении самих символов.
 
 Далее переворачиваем исходную строку. Это можно сделать, преобразовав строку в массивс помощью 
 метода .split() (библиотека String), затем перевернув массив методом .reverse() (библиотека Array) и, 
 наконец, преобразовав обратный массив снова в строку с помощью метода .join() (библиотека Array).
