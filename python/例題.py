#例題
#正の整数 N が標準入力から入力されるので、N 個の「*」を繋げた文字列を出力
input_lines = input()
count=int(input_lines)
output="*"
for i in range(count-1):
    output=output+"*"
    i+=1
print(output)

#前の人の参拝: 2 2 1→ AABBA
input_lines = input()
S = input_lines.rstrip().split(' ')
a = int(S[0])
b = int(S[1])
c = int(S[2])
A="A"
B="B"
C="A"
for i in range(a-1):
    A=A+"A"
    i+=1
for i in range(b-1):
    B=B+"B"
    i+=1
for i in range(c-1):
    C=C+"A"
    i+=1
print(A+B+C)


#
input1=input().rstrip().split(' ')
param=int(input1[0])
user=int(input1[1])
top=int(input1[2])
totalscore=0
input2=input().rstrip().split(' ')
for i in range(user):
	for j in range(param):
		inputscore=input().rstrip().split(' ')
		totalscore=totalscore+inputscore[j]*input2[j]



