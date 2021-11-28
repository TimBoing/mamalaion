# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating new users..."
user_1 = User.create!(email: "1player1@test.com", password: "123456", first_name: "Mama", last_name: "Laion",coins: 0, username: "MamaLaion")
# user_solo_fr.save!

puts "Some users have been created"

puts "Creating new wiki_pages..."
wiki_pageFR1 = WikiPage.create!(language: :fr,categories: "Fruit", title: "Raisin", url: "https://fr.wikipedia.org/wiki/Raisin")
wiki_pageFR2 = WikiPage.create!(language: :fr,categories: "Fruit", title: "Tomate", url: "https://fr.wikipedia.org/wiki/Tomate")
wiki_pageFR3 = WikiPage.create!(language: :fr,categories: "Fruit", title: "Avocat (fruit)", url: "https://fr.wikipedia.org/wiki/Avocat_(fruit)")
wiki_pageFR4 = WikiPage.create!(language: :fr,categories: "Fruit", title: "Orange (fruit)", url: "https://fr.wikipedia.org/wiki/Orange_(fruit)")
wiki_pageFR5 = WikiPage.create!(language: :fr,categories: "Fruit", title: "Prune", url: "https://fr.wikipedia.org/wiki/Prune")
wiki_pageFR6 = WikiPage.create!(language: :fr,categories: "Philosophie", title: "Philosophie", url: "https://fr.wikipedia.org/wiki/Philosophie")
wiki_pageFR7 = WikiPage.create!(language: :fr,categories: "Philosophie", title: "Socrate", url: "https://fr.wikipedia.org/wiki/Socrate")
wiki_pageFR8 = WikiPage.create!(language: :fr,categories: "Philosophie", title: "Diogène de Sinope", url: "https://fr.wikipedia.org/wiki/Diog%C3%A8ne_de_Sinope")
wiki_pageFR9 = WikiPage.create!(language: :fr,categories: "Philosophie", title: "Liste de philosophes scolastiques", url: "https://fr.wikipedia.org/wiki/Liste_de_philosophes_scolastiques")

wiki_pageEN1 = WikiPage.create!(language: :en, title: "New York City", url: "https://en.wikipedia.org/wiki/New_York_City")
wiki_pageEN2 = WikiPage.create!(language: :en, title: "United States", url: "https://en.wikipedia.org/wiki/United_States")
wiki_pageEN3 = WikiPage.create!(language: :en, title: "Mexico", url: "https://en.wikipedia.org/wiki/Mexico")
wiki_pageEN4 = WikiPage.create!(language: :en, title: "Pacific Ocean", url: "https://en.wikipedia.org/wiki/Pacific_Ocean")
wiki_pageEN5 = WikiPage.create!(language: :en, title: "Asia", url: "https://en.wikipedia.org/wiki/Asia")
wiki_pageEN6 = WikiPage.create!(language: :en, title: "Africa", url: "https://en.wikipedia.org/wiki/Africa")
wiki_pageEN7 = WikiPage.create!(language: :en, title: "Latin", url: "https://en.wikipedia.org/wiki/Latin")
wiki_pageEN8 = WikiPage.create!(language: :en, title: "Language", url: "https://en.wikipedia.org/wiki/Language")
wiki_pageEN9 = WikiPage.create!(language: :en, title: "Philosophy", url: "https://en.wikipedia.org/wiki/Philosophy")
puts "Some wiki_pages have been created"
