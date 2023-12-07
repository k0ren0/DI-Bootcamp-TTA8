

class AnagramChecker:
    def __init__(self, text) -> None:
        self.text = text

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            file_text = file.read()
        return cls(file_text)
    


    def main():
        print("Hello")

        file_path = 'sowpods.txt' 
        text = from_file(file_path)



    # if __name__ == "__main__":
#     main()