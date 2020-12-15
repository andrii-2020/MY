"""
# Создать класс File:
# -он должен принимать любое количество уникальных имен файлов но не меньшех 2-
# -создать метод который будет проверять существуют ли эти файлы, если нет то создать их
# -создать метод который принимает текст и выводит список файлов (записать текст в выбранный файл)
# -создать метод который водиывт список файлов, и при выборе, выводит содержимое в консоль
# -создать метод который даёт возможность выбрать два файла и меняет их содержимое местами
"""
import os


e = os.listdir('file')
for it in e:
    print(it)
#
# file_path = os.path.join('file', 'qqq.txt')


class File:

    def __init__(self, name_File):
        self.nameFile = name_File

    i = str(input('\nнемає файла напиши назву \n 1: вибери файл з списку щоб показати текст :'
                  '\n 2: записати текст в фаїл:\n '))
    if i == '1':
        vuborfile = str(input('назва файла: '))
        file = open(os.path.join('file', f'{vuborfile}.txt'))
        st = file.read()
        print(st)
        file.close()
    elif i == '2':
        f = str(input('напиши назву з списку: '))
        file1 = open(f'file\{f}.txt', 'a+')
        strinput = str(input('ТЕКСТ:\n'))
        st1 = file1.write(f'\n{strinput}')
        file1.close()

    else:
        print('NULL')
        filestr = os.path.join('file', i+'.txt')
        open(filestr, mode='x')


File(e)

