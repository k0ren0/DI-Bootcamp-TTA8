import psycopg2


# Establish a connection
conn = psycopg2.connect(
    dbname='gnijujni',
    user='gnijujni',
    password='5RiwnM1Y71dZdr4DldOM7UxzpaVGCUlZ',
    host='berry.db.elephantsql.com',
    port=5432
)

## 
# Create a cursor object to execute SQL queries
cur = conn.cursor()

# CRUD. - Create (insert) Read (select) Update (update) Delete (delete)

# Insert query
insert_query = 'INSERT INTO products (title, cost) VALUES (%s, %s)'
data_to_insert = ('iKey', 750)

cur.execute(insert_query, data_to_insert)

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
