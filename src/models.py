from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, Integer, Text, DateTime, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime

db = SQLAlchemy()

# Modelo User (Usuario)
class User(db.Model):
    __tablename__ = 'user'

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(50), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(String(200), nullable=False)
    firstname: Mapped[str] = mapped_column(String(50), nullable=True)
    lastname: Mapped[str] = mapped_column(String(50), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean(), default=True, nullable=False)

    # Relaciones
    favorites: Mapped[list["Favorite"]] = relationship(back_populates='user', cascade='all, delete-orphan')

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "firstname": self.firstname,
            "lastname": self.lastname,
        }

# Modelo Character (Personaje)
class Character(db.Model):
    __tablename__ = 'character'

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    age: Mapped[int] = mapped_column(Integer, nullable=True)
    gender: Mapped[str] = mapped_column(String(20), nullable=True)
    occupation: Mapped[str] = mapped_column(String(100), nullable=True)
    portrait_path: Mapped[str] = mapped_column(String(200), nullable=True)
    status: Mapped[str] = mapped_column(String(20), nullable=True)

    # Relaciones
    favorites: Mapped[list["Favorite"]] = relationship(back_populates='character')

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "age": self.age,
            "gender": self.gender,
            "occupation": self.occupation,
            "portrait_path": self.portrait_path,
            "status": self.status
        }

# Modelo Location (Locación)
class Location(db.Model):
    __tablename__ = 'location'

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    image_path: Mapped[str] = mapped_column(String(200), nullable=True)
    town: Mapped[str] = mapped_column(String(100), nullable=True)
    use: Mapped[str] = mapped_column(String(100), nullable=True)

    # Relaciones
    favorites: Mapped[list["Favorite"]] = relationship(back_populates='location')

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "image_path": self.image_path,
            "town": self.town,
            "use": self.use
        }

# Modelo Favorite (Favorito)
class Favorite(db.Model):
    __tablename__ = 'favorite'

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey('user.id'), nullable=False)
    character_id: Mapped[int] = mapped_column(ForeignKey('character.id'), nullable=True)
    location_id: Mapped[int] = mapped_column(ForeignKey('location.id'), nullable=True)
    favorite_type: Mapped[str] = mapped_column(String(20), nullable=False)  # "character" o "location"

    # Relaciones
    user: Mapped["User"] = relationship(back_populates='favorites')
    character: Mapped["Character"] = relationship(back_populates='favorites')
    location: Mapped["Location"] = relationship(back_populates='favorites')

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "character_id": self.character_id,
            "location_id": self.location_id,
            "favorite_type": self.favorite_type
        }