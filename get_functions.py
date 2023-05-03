from bottle import get, view
import json;

@get("/api")
def _():
    people = [
        {
        "id": "3",
        "name": 'babe',
        "age": '16'
        },
        {
        "id": "1",
        "name": 'thhhhh',
        "age": '16'
        }
    ]

    people_json = json.dumps(people)
    return people_json
