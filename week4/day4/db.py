import psycopg2
import os
from dotenv import load_dotenv

# Load variables from the .env file into the connect
load_dotenv()

# Retriece database crendetials from env

db_name = os.getenv('DB_NAME')
db_user = os. getenv('DB USER')
db_password = os. getenv('DB_PASS')
db_host = os.getenv('DB_HOST')
db_port = os.getenv('DB_PORT')


# Establish a connection
conn = psycopg2.connect(
    dbname='zbekinjp',
    user='zbekinjp',
    password='qSK2Bt5Pj-7stfPDTBBw79HmLNHzFbLL',
    host='berry.db.elephantsql.com',
    port=5432
)

## 
# Create a cursor object to execute SQL queries
cur = conn.cursor()

# CRUD. - Create (insert) Read (select) Update (update) Delete (delete)

# # Insert query
# insert_query = 'INSERT INTO products (title, cost) VALUES (%s, %s)'
# data_to_insert = ('iKey', 750)

# cur.execute(insert_query, data_to_insert)

# Commit the transaction
conn.commit()

# Execute a SELECT query
cur.execute('SELECT * FROM products')
rows = cur.fetchall()

for row in rows:
    print(row)

# Close the cursor and the connection
cur.close()
conn.close()
