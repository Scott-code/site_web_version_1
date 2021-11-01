let date = new Date();

function dateparser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDate;
}

let moreData = {
  destvar: ["element 1 ", "element 2"],
};

const { destvar } = moreData;

let array5 = [4, 8, 6, 7];

let [x, y, z] = array5;

console.log(x, y, z);
