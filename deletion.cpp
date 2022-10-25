#include<iostream>
using namespace std;
int deletion(int A[] , int n, int index)
{
    for(int i=index ; i<n ;i++)
    {
        A[i]=A[i+1];
    }
    n--;
}
int main()
{
    int n;
    cout<<"enter the size of an array : ";
    cin>>n;
    cout<<"Enter the elements of an array :";
    cout<<endl;
    int*A = new int (n);
    for(int i=0;i<n;i++)
    {
        cin>>A[i];
    }

    int index;
    cout<<"Enter the index you want to delete :";
    cin>>index;
    cout<<"Updated array is :";
    cout<<endl;
    deletion(A,n,index);
    for(int i=0;i<n-1;i++)
    {
        cout<<A[i]<<" ";
    }
    cout<<endl;
    return 0;
}

   
