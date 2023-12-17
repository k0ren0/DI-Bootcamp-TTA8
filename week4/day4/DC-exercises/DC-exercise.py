import requests
import psycopg2
import random

def get_country_data():
    api_url = "https://restcountries.com/v3.1/all"
    response = requests.get(api_url)

    if response.status_code == 200:
        countries = response.json()
        return countries
    else:
        print(f"Failed to fetch data from API. Status code: {response.status_code}")
        return None

##If I want to see only 10 countries
# cursor.execute("DROP TABLE IF EXISTS countries CASCADE")
    
# PostgreSQL table
def create_table(cursor):
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS countries (
            id SERIAL PRIMARY KEY,
            name TEXT,
            capital TEXT,
            flag TEXT,
            subregion TEXT,
            population INTEGER
        )
    """)

def insert_country_data(cursor, countries_data):
    for _ in range(10):
        random_country = random.choice(countries_data)

        country_info = {
            "name": random_country.get("name", {}).get("common", ""),
            "capital": random_country.get("capital", [])[0] if random_country.get("capital") else "",
            "flag": random_country.get("flags", {}).get("png", ""),
            "subregion": random_country.get("subregion", ""),
            "population": random_country.get("population", 0),
        }

        cursor.execute("""
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
        """, (country_info["name"], country_info["capital"], country_info["flag"],
              country_info["subregion"], country_info["population"]))

def main():
    countries_data = get_country_data()

    if countries_data:
        conn = psycopg2.connect(
            dbname='zbekinjp',
            user='zbekinjp',
            password='qSK2Bt5Pj-7stfPDTBBw79HmLNHzFbLL',
            host='berry.db.elephantsql.com',
            port=5432
        )

        cursor = conn.cursor()

        # Create the table if it doesn't exist
        create_table(cursor)

        # Insert random country data into the table
        insert_country_data(cursor, countries_data)

        # Commit and close the connection
        conn.commit()
        conn.close()

        print("Data insertion complete.")
    else:
        print("Failed to fetch country data from the API.")

if __name__ == "__main__":
    main()
