"""
создать класс Human
и два класса Prince и Cinderella которые наследуются от Human
у принца должен быть размер туфельки и  метод который принимает лист золушек и выводит какой золушки подошла туфелька
"""


class Humman:

    def __init__(self, name, size):
        self.name = name
        self.size = size

    def __str__(self):
        return f'{self.name} -- {int(self.size)} '

    def __repr__(self):
        return f'{self.name} -- {int(self.size)}'


class Prince(Humman):

    def __init__(self, name, size, fsize):
        super().__init__(name, size)
        self.fsize = fsize

    def find(self, ar):
        for i in ar:
            if self.fsize == i.size:
                print(f'Ура моя Cinderella:\n імя: {i.name} -- розмір туфельки: {i.size}')


class Cinderella(Humman):
    pass


a1 = Cinderella('nastia', 25)
a2 = Cinderella('katia', 28)
a3 = Cinderella('banana', 33)
a4 = Cinderella('oksana', 32)
inp = int(input('Тут вже є попелюшкі вибири-> 25, 28, 33, 32:\n'))

p = Prince('vasia', 30, inp)

ar = [a1, a2, a3, a4]
p.find(ar)
