document.getElementById('showFactBtn').addEventListener('click', showFact);

const facts = [
    "Apenas 8% das pessoas conseguem dobrar a língua em forma de trevo.",
    "O coração de um camarão está em sua cabeça.",
    "A Terra é o único planeta que não tem nome de um deus.",
    "Um raio pode atingir uma temperatura de 30.000 Kelvin (53.540 graus Fahrenheit).",
    "As vacas têm melhores amigas e ficam estressadas quando são separadas.",
    "O mel nunca estraga. Potes de mel encontrados em tumbas egípcias têm mais de 3000 anos e ainda são comestíveis.",
    "Bananas são bagas, mas morangos não são.",
    "Os flamingos são naturalmente brancos; eles ficam rosa por causa dos crustáceos na sua dieta."
];

function showFact() {
    const factElement = document.getElementById('fact');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.innerText = facts[randomIndex];
    factElement.style.display = 'block';
}