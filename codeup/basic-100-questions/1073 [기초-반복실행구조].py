# 0 입력될 때까지 무한 출력하기2

a = map(int, input().split())

for i in a:
    if i == 0:
        break

    print(i)


#############
# 모범 답안 #

l = input().split()
for x in l:
    if x != '0':
        print(x)
    else:
        break
