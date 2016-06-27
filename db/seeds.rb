def time_rand(from=0.0, to = Time.now)
  Time.at(from + rand * (to.to_f - from.to_f))
end

50.times do
  Idea.create(title: Faker::Hipster.word,
              body: Faker::Hipster.paragraph,
              quality: Random.new.rand(0..2),
              created_at: time_rand)
  puts Idea.count

end
puts "CREATED #{Idea.count} IDEAS!"
