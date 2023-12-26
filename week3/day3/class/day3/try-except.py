# def divide(x,y):
#     try:
#         result = x/y

#     except TypeError:
#         print('different types not int')

#     except:
#         raise ZeroDivisionError ('Can`t divide by zero')

#     else:
#         print(result)

    
# # print(divide(5,0))


# print('type error:', divide('e', 4))

# print(divide(8, 2))


my_list = [2,3,1,'a',2,42,1,5,3]

def sum_list(some_list):
    try:
        result = sum(some_list)
    
    except:
        pass
    
    else: 
        print(result)


sum_list(my_list)