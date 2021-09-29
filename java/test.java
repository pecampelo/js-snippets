public class Main {
	public static void main(String[] args) {

		// Variables: case-sensitive, try using descriptive names.
		// They can also begin with $ or _;

		// Always add semicolon at the end of a line;

		final String name = "Pedro Henrique Campelo Matheus"; // final will seal the variable.
		String greeting = "Hello, " + name;
		byte age = 25;                  		// stores whole numbers from -128 to 127 (counts 0)
		short birthYear = 1995          		// stores whole numbers from -32,768 to -32,767
		int problems = 2000000          		// stores whole numbers from -2,147,483,648 to 2,147,483,647
		long hairFollicles =  90000000000L   // stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		float ageFloat = 25.9f;             // Precise up to 7 decimal numbers
		double half = 19.99d                // stores fractions up to 15 decimal numbers;
		char initial = 'P';									// stores letters or ASCII values
		boolean personality = true;

		// adding can be a concatenation or a sum;

		// Typecasting is to assign a value of one type to another type.

		// Widening/Narrowing Casting: convert to a larger or smaller type size


		// https://www.w3schools.com/java/java_operators.asp


		System.out.println(greeting);
		System.out.println(age);
		System.out.println(ageFloat);
		System.out.println(initial);
		System.out.println(personality);
		// comments
	}
}

