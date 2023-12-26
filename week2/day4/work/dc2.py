items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}
wallet = "$300"


def can_afford (wallet:str, items_purchase:str)-> None:

    can_buy = []
    #Cleaning the data
    #Converting the str to int
    #Cheacking what can affort

    for product, price in items_purchase.items():
        # price_clean = price.replace("$", "") #first solution
        # price_clean = price.strip("$") #second solution with 1 parametr
        price_clean = price.strip("$").replace(",", "")
        if int(price_clean) < int(wallet.strip("$")):
            can_buy.append(product)



    return print(f" you can buy: {can_buy} and you have {wallet} dollars in your wallet")

can_afford (wallet, items_purchase)

#v1

# result = sorted(can_buy) if can_buy1 else "Nothing"
# print(result)

#v2
# print(f" you can buy: {can_buy} and you have {wallet} dollars in your wallet")



items_purchase = {
    "Apple": "$4",
    "Honey": "$3",
    "Fan": "$14",
    "Bananas": "$4",
    "Pan": "$100",
    "Spoon": "$2"
}
wallet = "$100"

can_afford (wallet, items_purchase)

items_purchase = {
    "Phone": "$999",
    "Speakers": "$300",
    "Laptop": "$5,000",
    "PC": "$1200"
}
wallet = "$1"

can_afford (wallet, items_purchase)

