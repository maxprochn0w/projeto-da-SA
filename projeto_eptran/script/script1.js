document.addEventListener('DOMContentLoaded', showFact);

const facts = [
    "É com grande prazer que recebemos você em nosso espaço dedicado à educação no trânsito. Aqui, acreditamos que a segurança viária começa com o conhecimento e a conscientização, e é por isso que estamos comprometidos em fornecer informações valiosas e recursos educativos para todos.   ",
   
];

function showFact() {
    const factElement = document.getElementById('fact');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.innerText = facts[randomIndex];
}