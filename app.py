import sqlite3 ,random
from flask import Flask , render_template , request , redirect , session


app = Flask(__name__)



@app.route('/')
def index():
    return render_template('index.html')



@app.route("/mission.html")
def task():
    conn =sqlite3.connect("GWN.db")
    c = conn.cursor()
    c.execute("select title,tips,img_file,level from tasks")
    task = random.sample(c.fetchall(),3)
    conn.close()
    print(task)
    return render_template("mission.html" , date = task )

# if __name__ == "__main__":
#     app.debug = True
#     app.run(host='192.168.100.59', port=5000) 
        
if __name__=="__main__":
    app.run(debug=True)
