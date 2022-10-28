// Online C++ compiler to run C++ program online
// reversing an array

#include <iostream>
#include <stdio.h>
#include <math.h>

using namespace std;

int main()
{

    // Write C++ code
    int n;
    cout << "enter size";
    cin >> n;
    int arr[n];
    cout << "enter elements";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    for (int i = 0; i < (n) / 2; i++)
    {

        int temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }
    for (int i = 0; i < n; i++)
    {
        cout << arr[i];
    }

    return 0;
}
