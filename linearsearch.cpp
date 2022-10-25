#include<iostream>
using namespace std;
int linearsearch(int arr[], int n, int key)
{ 
    for(int i=0;i<n;i++)
    {
    if(arr[i]==key)
    {
       return i;
    }
    }

    return -1;
} 
int main()
{
    int n;
    cout<<"Enter the number of elements in the array : ";
    cin>>n;
    int arr[n];
    cout<<"Enter the elements of the array :";
    cout<<endl;
    for (int i = 0 ; i<n ; i++)
    {
       cin>>arr[i];
       cout<<endl;
    }
    cout<<"Enter the element you want to search for : ";
    int key ;
    cin>>key;
    cout<<linearsearch(arr, n , key);
    return 0;
}
