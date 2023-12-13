import psycopg2

conn = psycopg2.connect(
    dbname='zbekinjp',
    user='zbekinjp',
    password='qSK2Bt5Pj-7stfPDTBBw79HmLNHzFbLL',
    host='berry.db.elephantsql.com',
    port=5432
)

class MenuItem:
    def __init__(self, item_name, item_price, conn) -> None:
        self.item_name = item_name
        self.item_price = item_price
        self.conn = conn
        self.cursor = self.conn.cursor()

    def save(self):
        self.cursor.execute("""
            INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s);
        """, (self.item_name, self.item_price))

        conn.commit()

    def delete(self):
        self.cursor.execute("""
            DELETE FROM Menu_Items WHERE item_name = %s;
        """, (self.item_name,))

        conn.commit()

    def update(self, new_name, new_price):
        self.cursor.execute("""
            UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s;
        """, (new_name, new_price, self.item_name))

        conn.commit()

    def display_all(self):
        self.cursor.execute("SELECT * FROM Menu_Items")
        items = self.cursor.fetchall()

        for item in items:
            print(item)

# item = MenuItem('Cheeseburger', 8.99)
# #1
# item.save()
# item.display_all()

# #2
# item.update('Cheeseburger', 9.49)
# item.display_all()

# #3
# item.delete()
# item.display_all()

# def close_cursor(self):
#     self.cursor.close()