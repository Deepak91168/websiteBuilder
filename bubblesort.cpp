#include<iostream>
using namespace std;
//bubble sort
int main()
{
    int n;
    cout<<"Enter the number of elements in an array : ";
    cin>>n;
    cout<<"Enter the elements of an array : ";
    cout<<endl;
    int arr[n];
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
    cout<<"Our sorted array is :";
    cout<<endl;
    int counter=1;
    while(counter<n)
    {
        for(int i=0;i<n-counter;i++)
        {
            if(arr[i]>arr[i+1]) 
            
            {
                int temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;

            }
        }
        counter++;
    }
    for(int i=0;i<n;i++)
    {
        cout<<arr[i]<<" ";
    }

    return 0;
}
