package com.company;

public class Main {

    public static void main(String[] args) {
	// write your code here
    }

    // Edabit's Encryption Scheme (https://edabit.com/challenge/jfCsugyp9BSLYEtwb)
    // 19/10/2020
    public static String encryption(String s) {
        s = s.replaceAll(" ", "");
        int length = s.length();
        double sqrt = Math.sqrt(length);
        int num = (int)Math.floor(sqrt), num1 = (int)Math.ceil(sqrt), num2 = 0, num3 = 0;
        String a = "";

        while (num < num1 && num * num1 < length) {
            num++;
        }

        char[][] grid = new char[num][num1];

        for(int i = 0; i < num; i++) {
            for(int j = 0; j < num1; j++) {
                grid[i][j] = s.charAt(num2);
                if(num2 < (length - 1)) {
                    num2++;
                } else {
                    break;
                }
            }
            System.out.println();
        }

        for(int i = 0; i < num1; i++) {
            a += " ";
            for(int j = 0; j < num; j++) {
                if(grid[j][i] != '\0') {
                    a += grid[j][i];
                }
            }
        }

        a = a.trim();
        return a;
    }
}
