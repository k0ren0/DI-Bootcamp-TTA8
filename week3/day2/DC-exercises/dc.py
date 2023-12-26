class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items or []
        self.page_size = int(page_size)
        self.current_page = 1
        self.calculate_total_pages()

    def calculate_total_pages(self):
        self.total_pages = (len(self.items) + self.page_size - 1) // self.page_size

    def get_visible_items(self):
        start_index = (self.current_page - 1) * self.page_size
        end_index = start_index + self.page_size
        return self.items[start_index:end_index]

    def prev_page(self):
        self.current_page = max(1, self.current_page - 1)
        return self

    def next_page(self):
        self.current_page = min(self.total_pages, self.current_page + 1)
        return self

    def first_page(self):
        self.current_page = 1
        return self

    def last_page(self):
        self.current_page = self.total_pages
        return self

    def go_to_page(self, page_num):
        self.current_page = max(1, min(self.total_pages, int(page_num)))
        return self


alphabetlist = list("abcdefghijklmnopqrstuvwxyz")
print(alphabetlist)

p = Pagination(alphabetlist, 4)

print(p.get_visible_items())  # ["a", "b", "c", "d"]

p.next_page()

print(p.get_visible_items())  # ["e", "f", "g", "h"]

p.last_page()

print(p.get_visible_items())  # ["y", "z"]

p.go_to_page(10)

print(p.get_visible_items())  # ["y", "z"]
