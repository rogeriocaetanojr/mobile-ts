import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n1 = Number(prompt("Digite sua primeira nota: "));
const n2 = Number(prompt("Digite sua segunda nota: "));

const notaFinal = n1 + n2;

console.log(`Nota Final = ${notaFinal.toFixed(1)}`);

if (notaFinal < 60.0) {
    console.log("REPROVADO");
}