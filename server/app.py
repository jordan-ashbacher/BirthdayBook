from flask import Flask

app = Flask(__name__)

app.route('/birthday', methods=['POST'])
def addBirthday():
    print(request.form)

if __name__ =='__main__':
    app.run(debug=True)