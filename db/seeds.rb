# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'
require 'open-uri'

url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
user_serialized = open(url).read
user = JSON.parse(user_serialized)
ingredient0 = user["drinks"][0]["strIngredient1"]
ingredient1 = user["drinks"][1]["strIngredient1"]
ingredient2 = user["drinks"][2]["strIngredient1"]
ingredient3 = user["drinks"][3]["strIngredient1"]
ingredient4 = user["drinks"][4]["strIngredient1"]
ingredient5 = user["drinks"][5]["strIngredient1"]
ingredient6 = user["drinks"][6]["strIngredient1"]
ingredient7 = user["drinks"][7]["strIngredient1"]
ingredient8 = user["drinks"][8]["strIngredient1"]

Ingredient.create(name: ingredient1)
Ingredient.create(name: ingredient2)
Ingredient.create(name: ingredient3)
Ingredient.create(name: ingredient4)
Ingredient.create(name: ingredient5)
Ingredient.create(name: ingredient6)
Ingredient.create(name: ingredient7)
Ingredient.create(name: ingredient8)
