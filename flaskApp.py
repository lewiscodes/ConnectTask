from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
    #return "Welcome to Python Flask!"
    return render_template("index.html")

@app.route("/ajaxRequest")
def ajaxRequest():
    return "This text was returned by an AJAX request!"

if __name__ == "__main__":
    app.run(debug="false")
