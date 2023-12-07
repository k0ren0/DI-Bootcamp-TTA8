
# #----------------------------------------------------------------
# #Daily Challenge : Text Analysis
# #----------------------------------------------------------------


# class Text:
#     def __init__(self, text):
#         self.text = text

#     def word_frequency(self, word):
#         word_list = self.text.split()
#         return word_list.count(word)

#     def most_common_word(self):
#         word_list = self.text.split()
#         unique_words = set(word_list)
#         return max(unique_words, key=word_list.count)

#     def unique_words(self):
#         word_list = self.text.split()
#         return list(set(word_list))

#     @classmethod
#     def from_file(cls, file_path):
#         with open(file_path, 'r', encoding='utf-8') as file:
#             file_text = file.read()
#         return cls(file_text)


# # Part I:
# example_text = "A good book would sometimes cost as much as a good house."
# text_analysis = Text(example_text)

# print(f"Frequency of 'good': {text_analysis.word_frequency('good')}")
# print(f"Most common word: {text_analysis.most_common_word()}")
# print(f"Unique words: {text_analysis.unique_words()}")

# # Part II:
# file_path = 'the_stranger.txt'
# text_from_file = Text.from_file(file_path)

# # Examples:
# print(f"Frequency of 'stranger': {text_from_file.word_frequency('stranger')}")
# print(f"Most common word: {text_from_file.most_common_word()}")
# print(f"Unique words: {text_from_file.unique_words()}")



"""
#### First
class Text:
    def __init__(self, text_str):
        self.text_str = text_str

    def frequency(self, word):
        list_words = self.text_str.split()
        frequency = list_words.count(word)
        return f"The frequency of {word} id {frequency} "
    



text1 = Text("A good book would sometimes cost as much as a good house")
print(text1.frequency("good"))
"""