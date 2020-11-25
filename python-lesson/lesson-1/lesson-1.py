import sys


# while input:
#
#     if input == '1':
#         print(min)
#         continue
#     elif input == '2':
#         print(d),
#     elif input == '3':
#         print(list2), exit()
#     elif input == '4':
#         print(r), exit()
#     elif input == '5':
#         n = 8
#         a = 8
#         for i in range(n):
#             for j in range(a):
#                 if i == 0 or j == 0 or i == n - 1 or j == n - 1:
#                     sys.stdout.write("* ")
#                 else:
#                     sys.stdout.write('  ')
#             print("")
#         else:
#             exit()
#     elif input == '6':
#         exit()


list1 = [22, 3, 5, 2, 8, 2, -23, 8, 23, 5]
list2 = [22, 3, 5, 2, 8, 2, -23, 8, 23, 5]
min = min(list1)
d = list(set(list1))
x = list2[4:4] = 'X'
r = float(sum(list1)) / max(len(list1), 1)

print('1:', 'найти min число в листе')
print('2:', 'удалить все одинаковые значения')
print('3:', 'заменить каждое четвертое значение на "Х"')
print('4:', 'вывести элемент листа, значение которого ближе всего к среднему арифметическому всех элементов')
print('5:', 'вывести на экран пустой квадрат из "*" сторона которого указана в переменой')
print('6:', 'exit\n *****************************')
input = input('Вибір за Вами: ')


def ii():

    while input:
        if input == '1':
            print(min)
            exit()
        elif input == '2':
            print(d)
            exit()
        elif input == '3':
            print(list2)
            exit()
        elif input == '4':
            print(r)
            exit()
        elif input == '5':
            n = 8
            a = 8
            for i in range(n):
                for j in range(a):
                    if i == 0 or j == 0 or i == n - 1 or j == n - 1:
                        sys.stdout.write("* ")
                    else:
                        sys.stdout.write('  ')
                print("")
            else:
                exit()
        elif input == '6':
            exit()
        else:
            print('err')


ii()
