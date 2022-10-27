#include <bits/stdc++.h>
using namespace std;
using namespace std::chrono;
void generateArray(vector<double> &v, int size, int lower_range, int upper_range)
{
    int range = upper_range - lower_range + 1;
    for (int i = 0; i < size; i++)
    {
        double num = rand() % range + lower_range;
        v.push_back(num);
    }
}
// void printElements(vector<double> &v)
// {
//     for (auto i : v)
//     {
//         cout << i << " ";
//     }
//     cout << endl;
// }
void prefixAveragesqn(vector<double> &v, vector<double> &a1)
{
    // O(n^2)
    for (int i = 0; i < v.size(); i++)
    {
        double sum = 0;
        for (int j = 0; j <= i + 1; j++)
        {
            sum = sum + v[j];
            if (i == j)
            {
                a1.push_back(sum / (i + 1));
            }
        }
    }
}
void prefixAveragen(vector<double> &v, vector<double> &a2)
{
    // O(n)
    double sum = 0;
    for (int i = 1; i <= v.size(); i++)
    {
        sum += v[i - 1];
        a2.push_back(sum / i);
    }
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    fstream file1;
    fstream file2;
    fstream Size;
    int max_size = pow(2,12);
    int size = 10;
    int i = 1;
    Size.open("size.txt",ios::out);
    file1.open("time1.txt", ios::out);
    file2.open("time2.txt", ios::out);
    while (size <= max_size)
    {
        // cout<<i<<"    "<<size<<"    ";
        Size<<size<<endl;
        int lower_range = 1, upper_range = 10000;
        vector<double> v, a1, a2;
        generateArray(v, size, lower_range, upper_range);
        // printElements(v);

        // For Algo. 1
        auto s1 = high_resolution_clock::now();
        prefixAveragesqn(v, a1);
        auto e1 = high_resolution_clock::now();
        auto duration1 = duration_cast<microseconds>(e1 - s1);
        file1<<duration1.count()<<endl;
        // cout << duration1.count() << "    ";

        // For Algo. 2
        auto s2 = high_resolution_clock::now();
        prefixAveragen(v, a2);
        auto e2 = high_resolution_clock::now();
        auto duration2 = duration_cast<microseconds>(e2 - s2);
        file2<<duration2.count()<<endl;
        // cout << duration2.count() << "    ";

        size = size + 10;
        i++;
    }
    return 0;
}