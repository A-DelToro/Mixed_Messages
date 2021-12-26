let gender = ['Male', 'Female']
let race = ['Orc', 'Elf', 'Human', 'Cat', 'Rat', 'Dragonkin']
let role = ['Archer', 'Wizard', 'Warrior', 'Warlock', 'Ninja', 'Thief', 'Peasent', 'Priest', 'Shaman']
let randomG = Math.floor(Math.random() * gender.length);
let randomR = Math.floor(Math.random() * race.length);
let randomRO = Math.floor(Math.random() * role.length);

console.log(`You are a ${gender[randomG]} ${race[randomR]}. Your Role is ${role[randomRO]}`);