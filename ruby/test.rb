class Greeter
  def initialize(name = 'world')
    @name = name
  end

  def greet
   puts "Hello #{@name}!"
  end

  def farewell
   puts "Goodbye, #{@name.capitalize}, come back soon!"
  end
end

greeter = Greeter.new('Octavius')
greeter.greet
greeter.farewell
puts [Greeter.instance_methods(false), greeter.respond_to?('name')];

class Greeter
  attr_accessor :name # Makes name a getter and name= a setter.
end

gretcha = Greeter.new('Andy');
puts gretcha.respond_to?("name")
puts gretcha.respond_to?("name=")
puts gretcha.greet
gretcha.name = 'Betty'
puts gretcha.name
gretcha.greet

class MegaGreeter
  attr_accessor :names # how would a spread operator work?

  def initialize(names = 'world')
    @names = names
  end

  def greet
    if @names.nil?  # i believe nil is a function to validate nulls???
      puts "..."
    elsif @names.respond_to?('each'); # method for arrays
      @names.each do |name| # each calls yield in all elements
        puts "Hello #{name}!"
      end
    else
      puts "Hello #{names}"
    end
  end

  def farewell
    if @names.nil?
      puts "..."
    elsif @names.respond_to?('join') # Duck Typing: formatting based on what it can do
      puts "Goodbye #{names.join(', ')}. Come back soon!"
    else
    puts "Hello #{names}"
    end
  end

end

if __FILE__ == $0
  mg = MegaGreeter.new
  mg.greet

  mg.names = ['Zeke', 'Albert', 'Don']
  mg.greet
  mg.farewell

  mg.names = nil
  mg.greet

end

puts ('Zeke').reverse
# puts 40.reverse           # Invalid
puts 40.to_s.reverse        # convert to string
puts '40'.to_i              # convert to integer
# puts ('do' + 'do').to_a   convert to array is invalid

# test.rb:80:in `<main>': undefined method `to_a' for "dodo":String (NoMethodError)

puts ('zeke').length
puts [12, 32].max           # largest value

ticket = [12, 43]           # store in a variable

puts ticket
ticket.sort
puts ticket
puts ticket [1]             # will print 43
puts ticket [2]             # will print nothing

# gsub = global substitute / replaces all occurences of a variable

# reversing a string will reverse all its characters.
# to make its lines into an array, use .lines

text = "I like to do it, \n even though I can't like it"

puts text.gsub('like', 'hate').lines.reverse.join

text = String.new("Que veut dire \u{e7}a?")

puts text

# many methods put together are called chaining methods

# casecmp seems interesting, it compares size while ignoring case, and
# returns an integer. This integer represents how many characters does
# the original string have compared to the second

string = 'chris'
puts string.casecmp('CHRISTIAN')    # should output -4

# String methods: https://ruby-doc.org/core-3.0.2/String.html

books = {}           # Hash
books['Harry Potter and the Deathly Hallows'] = :splendid
books['Rich Dad, Poor Dad'] = :mediocre

puts books

#  When you place a colon in front of a simple word,
#  you get a symbol. Symbols are cheaper than strings when it comes to memory
#  If you use a word over and over in your program, use a symbol,
#  rather than having thousands of copies of that word in memory,
#  the computer will store the symbol only once.

puts books["Harry Potter and the Deathly Hallows"]

# to access a item from a hash, you will not use a number, but the name of the string

puts books.keys
puts books.values



# https://try.ruby-lang.org/
# https://www.ruby-lang.org/en/documentation/quickstart/3/
