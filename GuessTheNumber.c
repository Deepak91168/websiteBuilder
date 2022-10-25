#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main()
{
    int number, guess, n = 1;
    srand(time(0));
    // Generates a random number between 1 to 100
    number = rand() % 100 + 1;
    printf("You have to guess a random number between 1 to 100 and you will win the game if you guess the number right in less than 8 attempts...ALL THE BEST \n");

    // Loop will not end untill the number is guessed
    do
    {
        printf("Guess the number between 1 to 100");
        scanf("%d", &guess);
        if (guess > number)
        {
            printf("Lower number please \n");
        }
        else if (guess < number)
        {
            printf("Heigher number please \n");
        }
        else
        {
            printf("You guessed it in %d attempts. \n", n);
        }
        n++;
    } while (guess != number);
    if (n <= 8)
    {
        printf("CONGRATULATIONS, YOU WON THE GAME");
    }
    else
    {
        printf("SORRY, YOU LOST THE GAME");
    }
    return 0;
}
