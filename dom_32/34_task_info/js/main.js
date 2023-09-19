// 2. Напишіть функцію пошуку найбільшого спільного дільника.

{
    function findGCD(a, b) {
        if (b == 0) {
            return a;
        } else {
            return findGCD(b, a % b);
        }
    }
    console.log(findGCD(30, 15))
}



// 3. Напишіть функцію для пошуку максимальної цифри у числі.

{
    function findMaxDigit(number) {
        // Базовий випадок: якщо число менше 10, повертаємо його як максимальну цифру
        if (number < 10) {
            return number;
        }

        // Рекурсивно визначаємо максимальну цифру в решті числа
        const maxInRest = findMaxDigit(Math.floor(number / 10));

        // Порівнюємо поточну цифру та максимальну цифру в решті числа
        const currentDigit = number % 10;
        return Math.max(currentDigit, maxInRest);
    }

    // Приклад використання
    // const number = 58391;
    // const maxDigit = findMaxDigit(number);
    // console.log(`Максимальна цифра у числі ${number} - ${maxDigit}`);
    console.log(findMaxDigit(56789))
}


// 4. Напишіть функцію, яка визначає чи є передане число простим.

{
    //2
    function isPrime(number, divisor = 2) {
        // Базовий випадок: якщо число менше або дорівнює 2, то воно є простим
        if (number <= 2) {
            return number === 2;
        }
    
        // Базовий випадок: якщо число ділиться націло на будь-який дільник, то воно не є простим
        if (number % divisor === 0) {
            return false;
        }
    
        // Інакше, рекурсивно перевіряємо наступні можливі дільники
        if (divisor * divisor <= number) {
            return isPrime(number, divisor + 1);
        }
    
        // Якщо немає дільників, то число є простим
        return true;
    }
    
    // Приклад використання
    const number = 17;
    if (isPrime(number)) {
        console.log(`${number} є простим числом.`);
    } else {
        console.log(`${number} не є простим числом.`);
    }
}

{
    //2
    function isPrime(number, divisor = 2) {
        if (number <= 1) {
          return false;
        }
        if (number <= 3) {
          return true;
        }
        if (number % divisor === 0) {
          return false;
        }
        if (divisor * divisor > number) {
          return true;
        }
        return isPrime(number, divisor + 1);
      }
      
      // Приклад використання
      const number = 17;
      if (isPrime(number)) {
        console.log(`${number} є простим числом.`);
      } else {
        console.log(`${number} не є простим числом.`);
      }
}


// 5. Напишіть функцію для виведення усіх множників, переданих числу у зростаючому порядку.Наприклад: число 18 – множники 2*3*3.


{
    function findFactors(number, divisor = 2) {
        // Базовий випадок: якщо число менше або дорівнює 1, повертаємо пустий масив
        if (number <= 1) {
          return [];
        }
        
        // Перевіряємо, чи число ділиться націло на поточний дільник
        if (number % divisor === 0) {
          // Якщо так, то додаємо дільник до масиву множників і рекурсивно викликаємо функцію для решти числа (number / divisor)
          const factors = [divisor, ...findFactors(number / divisor, divisor)];
          return factors;
        } else {
          // Якщо число не ділиться націло на поточний дільник, переходимо до наступного дільника (divisor + 1)
          return findFactors(number, divisor + 1);
        }
      }
      
      // Приклад використання
      const number = 18;
      const factors = findFactors(number);
      console.log(`Множники числа ${number}: ${factors.join(' * ')}`);

    //   Ця функція використовує рекурсію для знаходження усіх множників переданого числа. Вона розпочинається з дільника 2 та перевіряє, чи число ділиться націло на нього. Якщо так, то додаємо цей дільник до масиву множників та рекурсивно викликаємо функцію для решти числа (number / divisor). Якщо число не ділиться націло на поточний дільник, то переходимо до наступного дільника (divisor + 1). Функція повертає масив множників в зростаючому порядку.
}


//6. Написати функцію, яка повертає число Фібоначчі за переданим порядковим номером.Числа Фібоначчі: 1, 1, 2, 3, 5, 8, 13 ... Ряд ґрунтується на тому, що кожне число дорівнює сумі двох попередніх чисел. Наприклад: порядковий номер 3 – число 2, порядковий номер 6 – число 8.

{
    function fibonacci(n) {
        if (n <= 0) {
          return 0;
        } else if (n === 1) {
          return 1;
        } else {
          // Рекурсивно обчислюємо число Фібоначчі, сумуючи два попередні числа
          return fibonacci(n - 1) + fibonacci(n - 2);
        }
      }
      
      // Приклад використання
      const n = 6; // Порядковий номер
      const result = fibonacci(n);
      console.log(`Число Фібоначчі з порядковим номером ${n} - ${result}`);
}

