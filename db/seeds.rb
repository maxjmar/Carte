
puts 'seeding users'
maxjmar = User.create( username: 'maxjmar', password:'carte')

puts 'seeding categories'
mine = Category.create(name: 'My Cards')
recent = Category.create(name: 'Recently Recieved')
current = Category.create(name: 'Current Colleagues')

puts 'seeding cards'
