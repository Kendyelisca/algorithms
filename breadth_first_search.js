const graph = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

const Is_person_seller = (name) => {
  return name.endsWith("m");
};

const searchSeller = (name) => {
  const searchQueue = [...graph[name]];
  const searched = [];

  while (searchQueue.length > 0) {
    const person = searchQueue.shift();

    if (!searched.includes(person)) {
      if (Is_person_seller(person)) {
        console.log("The seller is: ", person);
        return true;
      } else {
        searchQueue.push(...graph[person]);
        searched.push(person);
      }
    }
  }
  return false;
};

searchSeller("you");
