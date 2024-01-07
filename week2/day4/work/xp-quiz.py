#ex 8 star wars

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def start_quiz(data:list)-> list:
    '''asks the questions and store wrong answers in a list'''
    wrong_answers = []

    #setting variables for inside each dict in the data
    for dict_question in data:
        question = dict_question['question']
        right_answer = dict_question['answer']

        #asking and taking the user's answer
        print(question)
        u_answer = input('write your answer: ').capitalize()

        #checking if the user answer is right or wrong and appending to the wrong_answers list 
        if u_answer != right_answer:
            wrong_answers.append(question)
            wrong_answers.append(u_answer)

        #BONUS: Asking after 3 tries if the user want to start ove
        if len(wrong_answers) == 6:
            start_over = input('Want to start again? (y/n) or any key to finish').lower()

            if start_over == 'y':
                start_quiz(data)
            elif start_over == 'n':
                continue
            else:
                return wrong_answers
            
    return wrong_answers  
          
        
def final_leaderb(l_useranswers:list, data:list)-> None:  
        print(f'You answered {len(data) - len(l_useranswers)} right: \n')

        for question in data:
            print(question)
            question_text = question['question']
            r_answer = question['answer']

            if question_text in l_useranswers:
                u_answer_idx = l_useranswers.index(question_text)+1

                print(f''' The question was: \"{question_text}\"\n
                You answered: {l_useranswers[u_answer_idx]}\n
                And the correct answer was: {r_answer}''')


l_useranswers = start_quiz(data)

final_leaderb(l_useranswers, data)
    
