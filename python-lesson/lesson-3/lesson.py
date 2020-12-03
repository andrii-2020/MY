
list1 = ['ggg', 3457, 5,7,8,'ccjhg']


def lst2():
	global list1
	print(list1)
lst2()

print('')	
		
def ttt(a,b,c):
    print('#############')
    print(a,b,c)
    return print(min(a,b,c),'\n#############')
    
    
ttt(1,3,5)
		
print('')

def mx(a,b,c):
    print('#############')
    print(a,b,c)
    return print(max(a,b,c),'\n#############')
    
    
mx(10,33,58)			
	
print('')
 					
def su(ar):
	m = max(ar)
	print('#############')
	print(m)
	mi = print(min(ar), "\n#############")
	return mi
				
su([15,5,33,7,9,44,76])							
										
print('')												
																
def l():
    list1 = [3,2,5,2,62,62,9596,29,9,9,49,56,946,51,651,98,651,651,]
    m = max(list1)
    return print(m)
l()

print('')

def l():
    list1 = [3,2,5,2,62,62,9596,29,9,9,49,56,946,51,651,98,651,651,]
    m = min(list1)
    return print(m,'\n***************')
l()

l1 = [3,2,5,2,62,62,9596,29,9,9,49,56,946,51,651,98,651,651,]
l2 = [3457, 5,7,8]
for i in l2:
    l1.append(i)
print(l1)

print('')

def mean(numbers):
    n = float(sum(numbers)) / max(len(numbers), 1)
    return print(n)

mean([10,222,34,4])

print('')

"""
- створити функцію яка приймає ліст чисел та складає значення елементів ліста та повертає його.
- створити функцію яка приймає ліст чисел та повертає середнє арифметичне його значень.
- є функція: 
def pr(): 
    return 'Hello_boss_!!!'
 написати декоратор до цієї функції, який замінює нижні підчеркування на пробіли і повертає це значення
"""