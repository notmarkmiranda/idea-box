50.times do
  Idea.create(title: Faker::Hipster.sentence,
              body: Faker::Hipster.paragraph,
              quality: Random.new.rand(0..2))
end
puts "CREATED #{Idea.count} IDEAS!"
