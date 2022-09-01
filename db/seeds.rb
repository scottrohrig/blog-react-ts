# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
posts = Post.create(
  [
    {
      title: "My First Post",
      body: "Hello World!"
    },
    {
      title: "Hello Rails",
      body: "The second post works"
    },
    {
      title: "Around and Around",
      body: "Here we go again"
    },
    {
      title: "Somewhere over the rainbow",
      body: "Skies are blue"
    },
    {
      title: "Zazu's song",
      body: "I've got a lovely bunch of coconuts"
    },
  ]
)