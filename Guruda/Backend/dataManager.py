import os
import json

# create a json file that stores a dictionary called "users" with basic user info keys and data as empty lists
with open('clients.json', 'w') as f:
    json.dump({"user_id": [],  "client_firstname": [], "client_lastname": [], "client_email": [], "client_phone": [], "client_notes": [], "client_company": []}, f)

    
