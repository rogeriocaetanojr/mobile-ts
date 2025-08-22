import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n = Number(prompt("Deseja a tabuada de que numero? "));

for (let i = 1; i <= 10; i++) {
    console.log(`${n} + ${i} = ${n * i}`);
}