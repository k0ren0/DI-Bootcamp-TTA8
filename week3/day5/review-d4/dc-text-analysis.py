import re
import os
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from collections import Counter

dir_path = os.path.dirname(os.path.realpath(__file__))
print(dir_path)

class Text:
    def __init__(self, text_str) -> None:
        self.text_str = text_str

    @classmethod
    def from_file(cls, text_file):
        with open(f'{dir_path}\\{text_file}', mode = 'r' ) as file:
            text_file = file.read()
            return Text(text_file)

    def frequency(self, word):
        self.text_str = self.text_str.lower()
        list_words = self.text_str.split()
        for i, word in enumerate(list_words):
            list_words[i] = re.sub('/[.,\/#!$%\^&\*;:{}=\-_`~()]/g', '', word)
        frequency = list_words.count(word)
        return f'The frequency of {word} is {frequency}'

    def most_common(self):
        self.text_str = self.text_str.lower()
        list_words = self.text_str.split()
        for i, word in enumerate(list_words):
            list_words[i] = re.sub('/[.,\/#!$%\^&\*;:{}=\-_`~()]/g', '', word)
        c_obj = Counter(list_words)
        most_common = c_obj.most_common(1)
        word, times = most_common[0]
        return f' the most common word is `{word}` it appears {times}'

    def unique_words(self):
        self.text_str = self.text_str.lower()
        list_words = self.text_str.split()
        for i, word in enumerate(list_words):
            list_words[i] = re.sub('/[.,\/#!$%\^&\*;:{}=\-_`~()]/g', '', word)
        unique = set(list_words)
        return f'the unique words in the string are: {unique}'



class TextModification(Text):
    STOP_WORDS = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 
    'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn', "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven', "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't", 'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't", 'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't", 'won', "won't", 'wouldn', "wouldn't"] 


    def __init__(self, text_str) -> None:
        super().__init__(text_str)


    def clean_ponctualion(self):
        self.text_str = self.text_str.lower()
        self.text_str = self.text_str.split()
        for i, word in enumerate(self.text_str):
            self.text_str[i] = re.sub(r'[.,\/#!$%\^&\*;:{}=\-_`~()]', '', word.strip('.'))
        return self.text_str
    
    def stop_words_checking(self):
        cleaned_text = []
        for word in self.text_str:
            if word.lower() not in TextModification.STOP_WORDS:
                cleaned_text.append(word)
        
        # cleaned_text = [word for word in self.text_str if word.lower() not in TextModification.STOP_WORDS]
        self.text_str = cleaned_text
        return self.text_str





    # def frequency(self):
    #     pass


# text1 = Text('A good book would sometimes cost as much as a good house.')

# print(text1.frequency('house'))
# print(text1.most_common())
# print(text1.unique_words())

text2 = Text.from_file('the_stranger.txt')
book = TextModification('The good book! would sometimes cost as much as the good house. A good book would sometimes cost as much as a good house.')
print(book.clean_ponctualion())
print(book.stop_words_checking())