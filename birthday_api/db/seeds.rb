# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Birthday.create([
  {name: 'John', dob:'19th-Aug-1966', relationship:'friend', gift:'MacBook'},
  {name: 'Xiaolin', dob:'29th-June-1990', relationship:'friend', gift:'Computer'},
  {name: 'Eric', dob:'19th-Aug-1966', relationship:'friend', gift:'MacBook'},
  {name: 'Matt', dob:'29th-June-1990', relationship:'friend', gift:'Computer'},
  {name: 'Mary', dob:'19th-Aug-1966', relationship:'friend', gift:'MacBook'},
  {name: 'Jack', dob:'29th-June-1990', relationship:'friend', gift:'Computer'}
])

Gift.create([
  {name:'book1', sender:'John', price:20, birthday_id: 1},
  {name:'book2', sender:'John', price:20, birthday_id: 1},
  {name:'candle1', sender:'John', price:20, birthday_id: 2},
  {name:'candle2', sender:'John', price:20, birthday_id: 3}
])
