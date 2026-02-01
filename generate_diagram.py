import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "src"))

from flask import Flask
from models import db, User, Character, Location, Favorite
from eralchemy2 import render_er

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///test.db"
db.init_app(app)

with app.app_context():
    db.create_all()
    db.session.commit()
    render_er("sqlite:////workspaces/Blog-los-simpson-JuanAbreu-datos/instance/test.db", "diagram.png")
    print("Diagrama generado exitosamente!")
