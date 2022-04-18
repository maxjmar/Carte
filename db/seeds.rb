# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'seeding users'
maxjmar = User.create( username: 'maxjmar', password_digest:'Carteblanche')

puts 'seeding categories'
mine = Category.create(name: 'My Cards')
recent = Category.create(name: 'Recently Recieved')
current = Category.create(name: 'Current Colleagues')
assoc = Category.create(name: 'Associates')
contact = Category.create(name: 'Reach Out To')

puts 'seeding cards'
Card.create(owner: 'john doe', notes: 'lorem ipsum', user_id: maxjmar.id, category_id: recent.id)
Card.create(owner: 'Maximilien', notes: 'lorem ipsum', user_id: maxjmar.id, category_id: mine.id)