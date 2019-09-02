from flask import Flask
from flask import request, jsonify

app = Flask(__name__)

hello = {'id': 1,
           'title': 'สวัสดีชาวโลก',
        }

# A route to return all of the available entries in our catalog.
@app.route('/api/v1/hello/<id>', methods=['GET'])
def api_all(id):
    return jsonify(hello)

