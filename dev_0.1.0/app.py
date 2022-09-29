from flask import Flask, render_template


app = Flask(__name__)

@app.get("/")
def home():
    # todo_list = Todo.query.all()
    return render_template("index.html")

