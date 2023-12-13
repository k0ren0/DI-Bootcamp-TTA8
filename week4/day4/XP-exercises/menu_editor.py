from menu_item import MenuItem
from menu_manager import MenuManager
import psycopg2

def show_user_menu():
    print("Program Menu:")
    print("A - Add an Item")
    print("D - Delete an Item")
    print("U - Update an Item")
    print("S - Show the Menu")
    print("E - Exit Program")

def add_item_to_menu(conn):
    item_name = input("Enter the item's name: ")
    item_price = float(input("Enter the item's price: "))
    
    item = MenuItem(item_name, item_price, conn)
    item.save()
    print(f"Item '{item_name}' was added successfully.")

def show_restaurant_menu(conn):
    menu = MenuManager.all_items(conn)
    if menu:
        print("Restaurant Menu:")
        for item in menu:
            print(item)
    else:
        print("Error: Unable to retrieve the restaurant menu.")

def main():
    conn = psycopg2.connect(
        dbname='zbekinjp',
        user='zbekinjp',
        password='qSK2Bt5Pj-7stfPDTBBw79HmLNHzFbLL',
        host='berry.db.elephantsql.com',
        port=5432
    )

    while True:
        show_user_menu()
        choice = input("Enter your choice: ").upper()

        if choice == 'A':
            add_item_to_menu(conn)
        elif choice == 'D':
            # Implement delete_item_from_menu function
            pass
        elif choice == 'U':
            # Implement update_item_from_menu function
            pass
        elif choice == 'S':
            show_restaurant_menu(conn)
        elif choice == 'E':
            show_restaurant_menu(conn)
            conn.close()
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()

