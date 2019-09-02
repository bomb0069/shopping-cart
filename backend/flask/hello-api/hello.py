from flask import Flask
from flask import request, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000/*"}})


hello = {'id': 1,
           'title': 'สวัสดีชาวโลก',
        }

# A route to return all of the available entries in our catalog.
@app.route('/api/v1/hello/<id>', methods=['GET'])
def api_all(id):
    return jsonify(hello)

