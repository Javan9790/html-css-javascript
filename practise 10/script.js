const squad =[];
const firstAstronaut = {
    id : 1,
    name: "Andy",
    role : "Commander",
    isEVAEligible: true,
    priority: 3,
    
};
secondAstronaut = {
    id : 2,
    name: "Buzz Aldrin",
    age: 90,
    mission: "Apollo 11",
};
const thirdAstronaut = {
    id : 3,
    name: "Michael Collins",
    age: 84,
    mission: "Apollo 11",
};
squad.push(firstAstronaut, secondAstronaut, thirdAstronaut);
console.log(squad);
function  addCrewMembeer (crew,astronaut){
   
    for (let index = 0; index < crew.length; index++) {
        const element = crew[index];
        if (astronaut.id === element.id) {
            console.log("Duplicate ID: " + astronaut.id);
            return;
        }
    }
    crew.push(astronaut);
    console.log(`Added ${astronaut.name} as ${astronaut.role}`);
}
 const addCrewMember = (crew, astronaut) => {
    for (let index = 0; index < crew.length; index++) {
        const element = crew[index];
        if (astronaut.id === element.id) {
            console.log("Duplicate ID: " + astronaut.id);
            return;
        }
    }
    crew.push(astronaut);
    console.log(`Added ${astronaut.name} as ${astronaut.role}`);
};

addCrewMember(squad, firstAstronaut);
const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
]; 
remainingCrew.forEach(astronaut => addCrewMember(squad, astronaut));
console.log(squad);
function swapCrewMembers(crew,fromIndex,toIndex) {
    if (fromIndex < 0 || fromIndex >= crew.length || toIndex < 0 || toIndex >= crew.length) {
        console.log("Invalid crew indices");
        return;
    }
    [crew[fromIndex], crew[toIndex]] = [crew[toIndex], crew[fromIndex]];
    console.log(`Swapped ${crew[fromIndex].name} and ${crew[toIndex].name}`);
    const updatedCrew = crew.slice();
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];
   
    return updatedCrew;
}
const updatedSquad = swapCrewMembers(squad, 2, 5);
function sortByPriorityDescending(crew) {
    for (let i = 0; i < crew.length - 1; i++) {
        for (let j = 0; j < crew.length - i - 1; j++) {
            if (crew[j].priority < crew[j + 1].priority) {
                [crew[j], crew[j + 1]] = [crew[j + 1], crew[j]];
            }
        }
    }
    return crew;
    
}
function getEVAReadyCrew(crew) {
    const eligible = [];
    for (const astronaut of crew) {
        if (astronaut.isEVAEligible) {
            eligible.push(astronaut);
        }
        sortByPriorityDescending(eligible);
    }
    return eligible;
}

const evaReadyCrew = getEVAReadyCrew(squad);
console.log(evaReadyCrew);
const EVAReadySquad=getEVAReadyCrew(updatedSquad);
function chunkCrew(crew,size) {
    if (size<1) {
        console.log("Chunk size must be >=1");
        return ;
        
    }
    const chunks = [];
    for (let i = 0; i < crew.length; i += size) {
        chunks.push(crew.slice(i, i + size));
    }
    return chunks;
}
const EVAChunks = chunkCrew(EVAReadySquad, 3);
console.log(EVAChunks);
function printCrewSummary(crew) {
    const sorted = crew.slice().sort((a, b) => b.priority - a.priority);
     sortByPriorityDescending(sorted);
     for (const astronaut of sorted) {
        console.log(astronaut.name);
     }
    
}
printCrewSummary(updatedSquad);