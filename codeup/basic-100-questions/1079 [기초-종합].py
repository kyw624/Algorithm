# 원하는 문자가 입력될 때까지 반복 출력하기

a = input().split()

for i in a:
    print(i)

    if i == 'q':
        break


#############
# 모범 답안 #

a = input().split()

for c in a:
    print(c)
    if c == 'q':
        break
