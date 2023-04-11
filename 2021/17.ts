export default function countPackages(carriers: any[], carrierID: string) {
  let packages = 0;
  let people: any[] = [];
  const transp = carriers.find((carrier) => carrier[0] === carrierID) ?? [];
  people.push(transp[0]);
  if (transp[2] != null && transp[2].length > 0) {
    people.push(transp[2]);
    people = people.flat();
  }
  carriers.forEach((carrier) => {
    people.forEach((person) => {
      if (carrier[0] === person) {
        people.push(carrier[2]);
        people = people.flat();
      }
    });
  });
  people = [...new Set(people)];
  carriers.forEach((carrier) => {
    people.forEach((person) => {
      if (carrier[0] === person) {
        packages += carrier[1];
      }
    });
  });
  return packages;
}

const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];
console.log(countPackages(carriers, "dapelu")); // 9

// 5 de dapelu, 2 de midu y 2 de jelowing = 9
const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];
console.log(countPackages(carriers2, "camila")); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
