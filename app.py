from flask import Flask, render_template, request, make_response, redirect, flash
from flask_bootstrap import Bootstrap4
from datetime import datetime, timezone
import pytz

app = Flask(__name__)

# imports bootstrap v. 4
bootstrap = Bootstrap4(app)

# code to make answers class, choose next one every 24 hours

class Ans:
    def __init__(self, items):
        self._i = 0
        self._t = datetime.now(timezone.utc).date()
        self.items = items

    def next(self):
        if (datetime.now(timezone.utc).date() - self._t).days >= 1:
            self._i = (self._i + 1) % len(self.items)
            self._t = datetime.now(timezone.utc).date()
        return self.items[self._i]

# list of answers in order
ans = Ans([
    'lolita',
    'anna karenina',
])

# code to make clue 1 class, choose next one every 24 hours
class Clueone:
        def __init__(self, items):
            self._i = 0
            self._t = datetime.now(timezone.utc).date()
            self.items = items

        def next(self):
            if (datetime.now(timezone.utc).date() - self._t).days >= 1:
                self._i = (self._i + 1) % len(self.items)
                self._t = datetime.now(timezone.utc).date()
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
            self._t = datetime.now(timezone.utc).date()
            self.items = items

        def next(self):
            if (datetime.now(timezone.utc).date() - self._t).days >= 1:
                self._i = (self._i + 1) % len(self.items)
                self._t = datetime.now(timezone.utc).date()
            return self.items[self._i]

# list of clue 2s in order
cluetwo = Cluetwo([
    'Clue2A',
    'Clue2B',
    'Clue2C',
    'Clue2D'
])

# code to make clue 3 class, choose next one every 24 hours
class Cluethree:
    def __init__(self, items):
        self._i = 0
        self._t = datetime.now(timezone.utc).date()
        self.items = items

    def next(self):
        if (datetime.now(timezone.utc).date() - self._t).days >= 1:
            self._i = (self._i + 1) % len(self.items)
            self._t = datetime.now(timezone.utc).date()
        return self.items[self._i]

#list of clue 3s in order
cluethree = Cluethree([
    'Clue3A',
    'Clue3B',
    'Clue3C',
    'Clue3D'
])

# code to make clue 4 class, choose next one every 24 hours
class Cluefour:
    def __init__(self, items):
        self._i = 0
        self._t = datetime.now(timezone.utc).date()
        self.items = items

    def next(self):
        if (datetime.now(timezone.utc).date() - self._t).days >= 1:
            self._i = (self._i + 1) % len(self.items)
            self._t = datetime.now(timezone.utc).date()
        return self.items[self._i]

#list of clue 4s in order
cluefour = Cluefour([
    'Clue 4A',
    'Clue 4B',
    'Clue 4C',
    'Clue 4D'
])

# code to make clue 5 class, choose next one every 24 hours
class Cluefive:
    def __init__(self, items):
        self._i = 0
        self._t = datetime.now(timezone.utc).date()
        self.items = items
    def next(self):
        if (datetime.now(timezone.utc).date() - self._t).days >= 1:
            self._i = (self._i + 1) % len(self.items)
            self._t = datetime.now(timezone.utc).date()
        return self.items[self._i]

# list of clue 5s in order
cluefive = Cluefive ([
    'Clue5A',
    'Clue 5B',
    'Clue 5C',
    'Clue 5D'
])

# code to make clue 6 class, choose next one every 24 hours
class Cluesix:
    def __init__(self, items):
        self._i = 0
        self._t = datetime.now(timezone.utc).date()
        self.items = items

    def next(self):
        if (datetime.now(timezone.utc).date() - self._t).days >= 1:
            self._i = (self._i + 1) % len(self.items)
            self._t = datetime.now(timezone.utc).date()
        return self.items[self._i]

#list of clue 6s in order
cluesix = Cluesix ([
    'Clue 6A',
    'Clue 6B',
    'Clue 6C',
    'Clue 6D'
])

# eventually figure out how to actually do a secret key
app.config['SECRET_KEY'] = 'alvkkjfifhbojn0iebkfu3yjbvkek298b'


@app.template_filter("datetimefilter")
def datetimefilter(value, format="%b %d, %Y, %I:%M %p"):
    tz = pytz.timezone('UTC')
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

@app.errorhandler(403)
def server_error(e):
    description = "You can't do that!"

    return render_template("403.html", description=description)

@app.errorhandler(408)
def server_error(e):
    description = "Oopsies, this took too long!"

    return render_template("408.html", description=description)


@app.route('/teapot')
def teapot():
    description = "I'm a lil' teapot, making robot tea! Capitalism, capitalism, you can't catch me!"
    return render_template("teapot.html", description=description)


@app.route('/privacy')
def privacy():
    description = "Privacy: it's not just for trees alone in forests."
    return render_template("privacy.html", description=description)


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
    return render_template("support.html", description=description)


@app.route('/play', methods=["GET", "POST"])
def play():

    # brings in date
    date = datetime.utcnow()

    # gets guess and checks against answers, flashes appropriate message
    if request.method == "POST":

        req = request.form

        guess = req.get("guess").lower().strip()

        if guess == ans.next():
            flash("Wow, you got it! ::triumphant music::", "success")
            return redirect(request.url)

        flash("Nope, that's not it. ::sad trombone.::", "secondary")
        return redirect(request.url)

    return render_template("play.html", date=date, clueone=clueone.next(),
                           cluetwo=cluetwo.next(), cluethree=cluethree.next(), cluefour=cluefour.next(),
                           cluefive=cluefive.next(), cluesix=cluesix.next()), ans.next()

if __name__ == '__main__':
    app.run()