# # args = *
# def print_names(*sababa):
#     for name in sababa:
#         print(1)

# print_names("David")

#kwargs = **

# def print_info(**kwargs):
#     print(kwargs["name"])

# print_info(name = "Viktor", age = 25, adress = "Holon")



# def print_info(**kwargs):
#     print(kwargs["adress"])

# print_info(adress = "5,7", score = [24, 47, 78])


# Использование *args и **kwargs предоставляет гибкость в определении функций, так как позволяет им принимать разное количество аргументов. Это особенно полезно, когда вы не знаете заранее, сколько аргументов может быть передано функции, или когда хотите сделать функцию более универсальной. Вот несколько основных сценариев использования:

# Непредсказуемое количество аргументов:
# Если вы не знаете заранее, сколько аргументов может быть передано функции, *args позволяет ей принимать любое количество позиционных аргументов. Это делает функцию более гибкой и адаптивной к различным ситуациям.

# Пример:

# def print_args(*args):
#     for arg in args:
#         print(arg)

# print_args(1, 2, 3, 'hello')

# Вывод:
# 1
# 2
# 3
# hello

# Произвольное количество именованных аргументов:
# **kwargs позволяет функции принимать произвольное количество именованных аргументов. Это особенно полезно, когда вы хотите передавать дополнительные параметры, но не знаете заранее, какие они будут.

# Пример:

# def print_kwargs(**kwargs):
#     for key, value in kwargs.items():
#         print(f'{key}: {value}')

# print_kwargs(name='John', age=25, city='New York')

# Вывод:
# name: John
# age: 25
# city: New York


# # Совместное использование с фиксированными аргументами:
# # *args и **kwargs могут использоваться вместе с фиксированными аргументами, что делает функцию более универсальной и способной обрабатывать различные сценарии.

# # Пример:

# def example_function(arg1, *args, kwarg1=None, **kwargs):
#     print(arg1)
#     print(args)
#     print(kwarg1)
#     print(kwargs)

# example_function(1, 2, 3, kwarg1='a', kwarg2='b')


# # Вывод:
# # 1
# # (2, 3)
# # a
# # {'kwarg2': 'b'}

# # Такие конструкции позволяют создавать более гибкий и универсальный код, который может адаптироваться к различным ситуациям и требованиям.


# def example_function(arg1, *args, kwarg1=None, **kwargs):
#     print(arg1)
#     print(args)
#     print(kwarg1)
#     print(kwargs)

# example_function(1, 2, 3, kwarg1='a', kwarg2='b')


# def check_arguments_keywordedarguments(*args,**kwargs):
#     print('*args', args)
#     print('**kwargs', kwargs)

# check_arguments_keywordedarguments(10,20,30,name='John',surname='Doe')

def check_arguments(*args):
    print(f"These are the arguments {args}")
    
check_arguments(1, 2, 'hey')

