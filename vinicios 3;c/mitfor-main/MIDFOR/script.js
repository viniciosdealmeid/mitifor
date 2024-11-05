const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quer desvendar os segredos por trás das tecnologias que usamos todos os dias? Descubra como é ser um engenheiro de software e criar soluções que transformam o mundo! Vamos Começar",
        alternativas: [
            {
                texto: "Sim. vamos lá !!!",
                afirmacao: "A engenharia de software é uma das carreiras mais dinâmicas e valorizadas na era digital, "
            },
            
        ]
    },
    {
        enunciado: "Para começo de conversa, você sabe o que é engenharia ? Engenharia é a aplicação de conhecimentos científicos, matemáticos e técnicos para projetar, construir e aprimorar estruturas, máquinas, sistemas e processos que atendam a necessidades e resolvam problemas da sociedade. ",
        alternativas: [
            {
                texto: "Vamos entender um pouco mais ...",
                afirmacao: "responsável por projetar, desenvolver e manter sistemas e aplicações que usamos diariamente, como apps de celular, sites, sistemas corporativos e muito mais."
            },
            
        ]
    },
    {
        enunciado: "Engenheiros utilizam princípios de diversas áreas do conhecimento para criar soluções funcionais, seguras, sustentáveis e eficientes, contribuindo para o avanço da tecnologia, da infraestrutura e da qualidade de vida. A engenharia abrange várias especializações, como civil, elétrica, mecânica, química e de software, cada uma focada em resolver desafios específicos de sua área.",
        alternativas: [
            {
                texto: "Então um Engenheiro de Software faz o que?",
                afirmacao: "O engenheiro de software atua no centro da tecnologia e da inovação, trabalhando com linguagens de programação, frameworks, metodologias ágeis e muitas vezes colaborando em equipes multidisciplinares para resolver problemas e criar soluções."
            },
            
        ]
    },
    {
        enunciado: "Hoje em dias os softwares são fundamentais na sociedade atual, pois impulsionam praticamente todas as áreas da vida moderna. Eles facilitam desde as atividades mais simples do dia a dia, como comunicação e entretenimento, até as operações mais complexas, como controle de sistemas industriais, diagnósticos médicos e gerenciamento de grandes volumes de dados. Em empresas e indústrias, os softwares otimizam processos, aumentam a eficiência e permitem a automação, o que reduz custos e melhora a produtividade.",
        alternativas: [
            {
                texto: "Então, Engenheiros de softwares são essenciais no contexto atual!!!",
                afirmacao: "Para quem está interessado em seguir essa carreira, é importante ter habilidades em lógica, matemática e resolução de problemas, além de disposição para aprender continuamente, pois a área de tecnologia evolui rapidamente. Os profissionais também costumam desenvolver habilidades em trabalho em equipe, comunicação e gestão de projetos, que são cada vez mais valorizadas.Além do aspecto técnico, a engenharia de software tem grande impacto social, já que muitos dos sistemas desenvolvidos por esses profissionais ajudam a otimizar processos, melhorar a qualidade de vida e expandir o acesso à informação. Se você se interessa por tecnologia, inovação e resolver desafios complexos, essa pode ser a carreira ideal."
            },
            
        ]
    },
    {
        enunciado: "Em resumo, os softwares são a espinha dorsal da infraestrutura digital, conectando pessoas, sistemas e dispositivos, o que torna nosso mundo mais integrado, ágil e adaptável às mudanças e o engenheiros de software são a ligação nervosa desse sistema nervoso",
        alternativas: [
            {
                texto: "Você agora já sabe um pouquinho da área, venha conhecer mais!!! ",
                afirmacao: "Acesse nosso site" 
            },
            
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você Sabia que ....";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

