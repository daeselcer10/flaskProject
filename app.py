from flask import Flask, render_template, request, make_response, redirect, flash
from flask_bootstrap import Bootstrap4
from datetime import datetime
import pytz
from itertools import cycle
from schedule import every, repeat, run_pending
import time

app = Flask(__name__)

# imports bootstrap v. 4
bootstrap = Bootstrap4(app)

# code to make answers class, choose next one every 24 hours
class Ans:
    def __init__(self, items):
        self._i = 0
        self._t = datetime.now()
        self.items = items

    def next(self):
        if (datetime.now() - self._t).total_seconds() >= 10:
            self._i = (self._i + 1) % len(self.items)
            self._t = datetime.now()
        return self.items[self._i]

# list of answers in order
ans = Ans([
    'Pride and Prejudice',
    'Anna Karenina',
])

# code to make clue 1 class, choose next one every 24 hours
class Clueone:
    def __init__(self, items):
        self._i = 0
        self._t = datetime.now()
        self.items = items

    def next(self):
        if (datetime.now() - self._t).total_seconds() >= 10:
            self._i = (self._i + 1) % len(self.items)
            self._t = datetime.now()
        return self.items[self._i]

# list of clue 1s in order
clueone = Clueone([
    'Clue1A',
    'Clue1B',
    'Clue1C',
    'Clue1D'
])

# code to make clue 2 class, choose next one every 24 hours
class Cluetwo:
    def __init__(self, items):
        self._i = 0
        self._t = datetime.now()
        self.items = items

    def next(self):
        if (datetime.now() - self._t).total_seconds() >= 10:
            self._i = (self._i + 1) % len(self.items)
            self._t = datetime.now()
        return self.items[self._i]

# list of clue 2s in order
cluetwo = Cluetwo([
    'Clue2A',
    'Clue2B',
    'Clue2C',
    'Clue2D'
])


# eventually figure out how to actually do a secret key
app.config['SECRET_KEY'] = 'alvkkjfifhbojn0iebkfu3yjbvkek298b'


@app.template_filter("datetimefilter")
def datetimefilter(value, format="%b %d, %Y, %I:%M %p"):
    tz = pytz.timezone('US/Central')  # converts from UTC to CST
    utc = pytz.timezone('UTC')
    value = utc.localize(value, is_dst=None).astimezone(pytz.utc)
    local_dt = value.astimezone(tz)
    return local_dt.strftime(format)


@app.template_filter("puredatefilter")
def datetimefilter(value, format="%b %d, %Y"):
    tz = pytz.timezone('US/Central')  # Month Day Year only, no hours/minutes
    utc = pytz.timezone('UTC')
    value = utc.localize(value, is_dst=None).astimezone(pytz.utc)
    local_dt = value.astimezone(tz)
    return local_dt.strftime(format)

@app.errorhandler(404)
def not_found(e):
    description = "You've reached a page that isn't real. Perhaps you entered a URL incorrectly?"
    return render_template("404.html", description=description)

@app.errorhandler(500)
def server_error(e):
    description = "Something went wrong on my end."

    return render_template("500.html", description=description)

@app.route('/teapot')
def teapot():
    description = "I'm a lil' teapot, making robot tea! Capitalism, capitalism, you can't catch me!"
    return render_template("teapot.html", description=description)


@app.route('/')
def index():
    description = "Bookshelf! The book guessing game! Try it, it's fun."
    a = "How does Bookshelf work? Well, every day a tiny robot librarian selects a new book for you from their " \
        "virtual Bookshelf. "
    b = "This friendly lil' bot has left you six clues to help you guess which book they've picked off the shelf."
    c = "The clues start off tricky, but become more pointed and obvious as you go."

    date = datetime.utcnow()

    return render_template("index.html", description=description, date=date, a=a, b=b, c=c)


@app.route('/about')
def about():

    return render_template("about.html")


@app.route('/contact')
def contact():
    description = "Throw rocks at my window."
    return render_template("contact.html", description=description)

@app.route('/support')
def support():
    description = "If you enjoy Bookshelf, please consider supporting me by buying me a coffee on Ko-Fi!"
    return render_template("support.html", description = description)

@app.route('/play', methods=["GET", "POST"])
def play():
    # sample clues for now, delete after all clues are written and in correct place further up
    books = [[
        "Clue 1: This book was written in 1813 in England. ",
        "Clue 2: This book was originally titled First Impressions. ",
        "Clue 3: You may have read this book in high school English class. ",
        "Clue 4: Minor characters include Mary King, Maria Lucas, and William Collins. ",
        "Clue 5: This book was written by Jane Austen. ",
        "Clue 6: The main characters are Eliabeth Bennet and Fitzwilliam Darcy. "],
        ["Clue 1: This book was published from 1875 to 1877 in Russia. ",
         "Clue 2: This book was chosen for Oprah's book club. ",
         "Clue 3: Here's the book's opening line! 'All happy families are alike; each unhappy family is unhappy in "
         "its own way.' ",
         "Clue 4: One famous scene in this book involves a train. ",
         "Clue 5: This book's author is Leo Tolstoy. ",
         "Clue 6: The main characters are Count Vronsky, Levin, and Anna Karenina. "],
        ["Clue 1: This book was published in 1937 in the United Kingdom.",
         "Clue 2: This book may have been read aloud to you before bedtime as a child.",
         "Clue 3: One famous prop from this book is a glowing sword.",
         "Clue 4: In a memorable scene, two main characters play a riddle game inside some mountain caves.",
         "Clue 5: The main characters include Bilbo, Gollum, and Gandalf.",
         "Clue 6: The opening line reads: 'In a hole in the ground, there lived a hobbit.'"
         ],
        ["Clue 1: This book was written in 2020 in the USA.",
         "Clue 2: An otherworldly House is the setting for most of this book.",
         "Clue 3: This book was inspired by C.S. Lewis' novel 'The Magician's Nephew.'",
         "Clue 4: This book's author has written only one other novel, the sensational 'Jonathan Strange and Mr. "
         "Norrell.'",
         "Clue 5: The original hardcover of this book displays a satyr playing pan-pipes.",
         "Clue 6: This book's main characters are Piranesi, The Other, and Sixteen."
         ]
    ]
    # brings in date
    date = datetime.utcnow()

    # gets guess and checks against answers, flashes appropriate message
    if request.method == "POST":

        req = request.form

        guess = req.get("guess")

        if guess == ans.next():
            flash("Wow, you got it! ::triumphant music::", "success")
            return redirect(request.url)

        flash("Nope, that's not it. ::sad trombone.::", "secondary")
        return redirect(request.url)

    return render_template("play.html", books=books, date=date, clueone=clueone.next(),
                           cluetwo=cluetwo.next()), ans.next()

if __name__ == '__main__':
    app.run()