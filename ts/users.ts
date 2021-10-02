type RelationshipStatus = "single" | "married" | "Divorced" | "widowed";
type EducationLevel = "elementary school" | "high school" | "college" | "master's or doctor's degree" | "PhD"

interface User {
    firstName: string;
    middleName?: string;
    lastName: string;
    email?: string;
    password?: string;
    age?: number;
    address?: string;
    nationality?: string;
    phoneNumber1?: number | string;
    phoneNumber2?: number | string;
    birthdate?: string;
    profession?: string;
    relationshipStatus?: RelationshipStatus;
    educationLevel?: EducationLevel;
    isClient?: boolean;
    isAdmin?: boolean;
    id?: number;
    createdAt?: string;
}

let userList: User[] = [
    { firstName: "Pedro", lastName: "Matheus", email: "pedrohcmatheus@gmail.com", isClient: false, isAdmin: true, id: 0 },
];

let hitList: User[];

function addUser(newUser: User) {
    let quantityOfUsers = userList.length;
    newUser.id = quantityOfUsers;
    userList.push(newUser);
    console.log(`New user ${newUser.firstName} added to User List!`);
}

function findUserByPropertyValue(list: Array<any>, value: string): void {
    let numberOfHits = 0;
    let hitList = [];
    do {
        for (let element of list) {
            for (const property in element) {
                let hit = compareFormattedValues(element[property], value);
                if (hit === true) {
                    numberOfHits++;
                    hitList.push(element);
                }
            }
        }
    } while (numberOfHits === 0);
    console.log(`You have ${numberOfHits} matches!`);
    console.log(hitList);
}

function compareFormattedValues(valueInsideProperty: string, valueSearched: string) {
    formatValuesAsStrings(valueInsideProperty, valueSearched);
    if (valueInsideProperty === valueSearched) return true;
    else { return false; }
}

function formatValuesAsStrings(valueInsideProperty: any, valueSearched: any): Array<string> {
    if (typeof valueInsideProperty === 'string' && typeof valueSearched === 'string') {
        valueSearched.toLowerCase();
        valueInsideProperty.toLowerCase();
    } else {}
		return [valueSearched, valueInsideProperty];
}

addUser({ firstName: "Kimberly", lastName: "Borges", email: "kimborgesvalerio@gmail.com", isAdmin: true});
addUser({ firstName: "Pedro", lastName: "Latro", isClient: true, email: "pedrolatro@gmail.com"});
addUser({ firstName: "Gregório", lastName: "Mazzo"});

const find = findUserByPropertyValue(userList, "Pedro");
