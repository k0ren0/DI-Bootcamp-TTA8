class AnagramChecker:
    def __init__(self, words):
        self.words = words
        with open(words, 'r') as file:
            self.words = set(word.strip().lower() for word in file)

    def is_valid_word(self, word):
        return word.lower() in self.words

    def get_anagrams(self, word):
        word = word.lower()
        return [w for w in self.words if self.is_anagram(word, w) and word != w]

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())
