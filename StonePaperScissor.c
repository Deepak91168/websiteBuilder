#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int StonePaperScissor(char user, char comp)
// Will give 1 if user wins, 0 if match draws and -1 if user looses
{
    // Condition for draw
    if (user == comp)
    {
        return 0;
    }

    // Non-draw conditions
    if (user == 's' && comp == 'p')
    {
        return -1;
    }
    else if (user == 'p' && comp == 's')
    {
        return 1;
    }
    if (user == 's' && comp == 'r')
    {
        return 1;
    }
    else if (user == 'r' && comp == 's')
    {
        return -1;
    }
    if (user == 'p' && comp == 'r')
    {
        return -1;
    }
    else if (user == 'r' && comp == 'p')
    {
        return 1;
    }
}

int main()
{
    char user, comp;
    int number;
    srand(time(0));
    number = rand() % 100 + 1;
    if (number < 33)
    {
        comp = 's';
    }
    else if (number > 33 && number < 66)
    {
        comp = 'p';
    }
    else
    {
        comp = 'r';
    }
    printf("Enter s for stone, p for paper and r for scissor");
    scanf("%c", &user);
    int result = StonePaperScissor(user, comp);
    if (result == 0)
    {
        printf("Match is draw \n");
    }
    else if (result == 1)
    {
        printf("Congratulations, you won the match \n");
    }
    else
    {
        printf("Sorry, you lost the match \n");
    }
    printf("You chose %c and computer chose %c", user, comp);
    return 0;
}
