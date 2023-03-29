class Person:
    def __init__(self, name, age, first_language='en'):
        self.name = name
        self.age = age
        self.first_language = first_language

    def sayGreeting(self):
        if self.first_language == 'en':
            print(self.name, 'says', 'hello')
        elif self.first_language == 'es':
            print(self.name, 'says', 'hola')
        else:
            print('language not known')


person1 = Person('Shirly', 67)
person2 = Person('Walter', 67, first_language='es')
person1.sayGreeting()
person2.sayGreeting()