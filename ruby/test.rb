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
Greeter.instance_methods