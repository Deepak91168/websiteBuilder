#include<iostream>
using namespace std;
int binarySearch(int arr[], int n, int key)
{
    int s=0;
    int e=n-1;
    while(s<=e){
        int mid=(s+e)/2;
        if(arr[mid]==key){
            return mid;
        }
        else if (arr[mid]>key){
            e=mid-1;
        }
        else{
            s=mid+1;
        }
    }
    return -1;
}
int main()
{
    int n ;
    cout<<"Enter the number of elements in the array : ";
    cin>>n;
    int arr[n];
    cout<<"Enter the elements of an array :";
    for(int i = 0 ; i<n ; i++){
        cin>>arr[i];
    }
    int key;
    cout<<"Enter the element you want to serch for :";
    cin>>key;
    cout<<binarySearch(arr,n,key);
    
    return 0;
}
