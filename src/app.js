const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const extensions = ['.com', '.net', '.io'];

for (const p of pronoun) {
  for (const a of adj) {
    for (const n of noun) {
      for (const ext of extensions) {
        console.log(`${p}${a}${n}${ext}`);
      }
    }
  }
}