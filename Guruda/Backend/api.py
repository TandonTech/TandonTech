import flask
from flask import request, jsonify
import json
import requests
import os
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

temp_auth = "5050"

@app.route('/<query>', methods=['GET'])
def api(query):
    try:
        if query == "": return 

        user_id = str(query.split("+$AUTH=")).split("$$")[0]
        user_key = str(query.split("+$AUTH=")).split("$$")[1]
        
        if  == temp_auth:


    except:
        return "Invalid query"

if __name__ == '__main__':
    app.run()