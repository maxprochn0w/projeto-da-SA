document.addEventListener('DOMContentLoaded', showFact);

const facts = [
    "Seja bem-vindo ao nosso site dedicado ao universo do trânsito! Aqui, buscamos ser a sua fonte confiável de informações, dicas e soluções para tornar a sua experiência no trânsito mais segura, eficiente e agradável.",
    "Navegue por nosso conteúdo diversificado, desenvolvido por especialistas e entusiastas do trânsito, e descubra recursos úteis para aprimorar seu conhecimento, aumentar sua segurança e contribuir para um tráfego mais harmonioso.",
   
];

function showFact() {
    const factElement = document.getElementById('fact');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.innerText = facts[randomIndex];
}