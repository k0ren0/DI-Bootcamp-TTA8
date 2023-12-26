from http.server import BaseHTTPRequestHandler, HTTPServer
import psycopg2
from urllib.parse import urlparse, parse_qs

# Замените значения на ваши параметры подключения к PostgreSQL
db_params = {
    "dbname": "zbekinjp",
    "user": "zbekinjp",
    "password": "qSK2Bt5Pj-7stfPDTBBw79HmLNHzFbLL",
    "host": "berry.db.elephantsql.com",
    "port": "5432",
}

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()

            events = self.get_events()
            response = self.render_template('index.html', events=events)
            self.wfile.write(response.encode('utf-8'))
        else:
            self.send_error(404)

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length).decode('utf-8')
        params = parse_qs(post_data)

        if self.path == '/register':
            username = params.get('username', [''])[0]
            self.register_user(username)
            self.send_response(302)
            self.send_header('Location', '/')
            self.end_headers()
        elif self.path == '/create_event':
            event_name = params.get('event_name', [''])[0]
            organizer_id = params.get('organizer_id', [''])[0]
            self.create_event(event_name, organizer_id)
            self.send_response(302)
            self.send_header('Location', '/')
            self.end_headers()
        else:
            self.send_error(404)

    def get_events(self):
        connection = psycopg2.connect(**db_params)
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM events;")
        events = cursor.fetchall()
        connection.close()
        return events

    def register_user(self, username):
        connection = psycopg2.connect(**db_params)
        cursor = connection.cursor()
        cursor.execute("INSERT INTO users (username) VALUES (%s);", (username,))
        connection.commit()
        connection.close()

    def create_event(self, event_name, organizer_id):
        connection = psycopg2.connect(**db_params)
        cursor = connection.cursor()
        cursor.execute("INSERT INTO events (name, organizer_id) VALUES (%s, %s);", (event_name, organizer_id))
        connection.commit()
        connection.close()

    def render_template(self, template_name, **context):
        with open(template_name, 'r') as template_file:
            template_content = template_file.read()

        for key, value in context.items():
            template_content = template_content.replace(f"{{{{{key}}}}}", str(value))

        return template_content

if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, RequestHandler)
    print('Server started on http://localhost:8000/')
    httpd.serve_forever()
