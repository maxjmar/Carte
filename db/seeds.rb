
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