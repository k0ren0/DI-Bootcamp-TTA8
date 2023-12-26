user_str = input("GIVE me a string 10 chars long: ")

if len(user_str) < 10:
    print("String not long enough")

elif len(user_str) > 10:
    print("String too long")

else:
    print("Perfect string.")
    print("thats\'s ther first and last chars" , user_str[0], user_str[-1])

    outpun_str = ""
    for i in user_str:
        outpun_str += i
        print (outpun_str)

    user_1 = list(outpun_str)
    random.shuffle(user_1)
    user_1 = ''.join(user_1)
    print("Nice: ", user_1)