from anagram_checker import AnagramChecker

def get_user_input():
    return input("Enter a word (or type 'exit' to quit): ").strip()

def main():
    anagram_checker = AnagramChecker("sowpods.txt")
    while True:
        user_input = get_user_input()
        if user_input.lower() == 'exit':
            break

        word = user_input.strip()

        if ' ' in word or not word.isalpha() or not anagram_checker.is_valid_word(word):
            print(f"Error: '{word}' is not a valid English word.")
            continue

        anagrams = anagram_checker.get_anagrams(word)
        print(f"Anagrams for '{word}': {', '.join(anagrams) if anagrams else 'None'}")

if __name__ == "__main__":
    main()
