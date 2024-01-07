import psycopg2

conn = psycopg2.connect(
    dbname='zbekinjp',
    user='zbekinjp',
    password='qSK2Bt5Pj-7stfPDTBBw79HmLNHzFbLL',
    host='berry.db.elephantsql.com',
    port=5432
)

import psycopg2

class MenuManager:
    @classmethod
    def get_by_name(cls, item_name):
        try:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM menu_items WHERE item_name = %s", (item_name,))
                return cursor.fetchone()
        except psycopg2.Error as e:
            print(f"Error retrieving item by name: {e}")
            return None
        finally:
            conn.close()

    @classmethod
    def all_items(cls):
        try:
            with conn.cursor() as cursor:
                cursor.execute("SELECT * FROM menu_items")
                return cursor.fetchall()
        except psycopg2.Error as e:
            print(f"Error retrieving all items: {e}")
            return None
        finally:
            conn.close()

# item_name = "Cheeseburger"
# result = MenuManager.get_by_name(item_name)

# if result:
#     print(f"Item found: {result}")
# else:
#     print(f"No item found with name '{item_name}'")