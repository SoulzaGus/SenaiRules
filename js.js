let i = 0;
let leis = [
  "1. Usuários e equipe do Laboratório devem preservar o silêncio na sala para que esta se configure como um ambiente de estudo.",
  "2. É proibido o consumo de qualquer tipo de alimento ou bebida nos Laboratórios.",
  "3. O ambiente deve preservar o estado de limpeza e organização de que foi encontrado. Lixo deve ser depositado na lixeira, organizar cadeiras e demais recursos utilizados durante a aula.",
  "4. Ao término do uso do laboratório, certifique-se de desligar o PC com a respectiva tela, fechando todos os programas e finalizando o sistema operacional.",
  "5. É proibido acessar páginas da Internet que possam ser consideradas ilegais ou ofensivas à moral pessoal ou coletiva. Por exemplo, páginas de relacionamentos, pornográficas, de caráter racista, discriminatórias ou que incitem a violência.",
  "6. Não é permitido usar indevidamente os recursos disponíveis na Internet, como utilizar a internet para acessar site de compras, jogos, redes sociais ou quaisquer outros assuntos não pertinentes à aula. No caso de jogos, só serão permitidos aqueles que foram designados pelo instrutor com o objetivo didático-pedagógico.",
  "7. Não é permitido utilizar recursos de comunicação instantânea (MSN, salas de bate-papo, Google Talk, WhatsApp, Telegram, entre outros similares) que não estejam previstos em atividades didático-pedagógicas.",
  "8. É proibido perturbar o ambiente com brincadeiras, algazarras e/ou qualquer outra atividade alheia às atividades didático-pedagógicas, assim como exercer atividades não relacionadas com o uso específico deste Laboratório.",
  "9. Não é permitido trocar cabos ou equipamentos periféricos e/ou acessórios (teclados, mouses, etc.). Caso algum equipamento apresente defeito ou não ligue, informar o instrutor para que esse comunique a área de TI responsável por manutenções.",
  "10. É proibida a instalação de qualquer tipo de programa (mesmo que freeware ou de uso livre) sem a expressa autorização da Supervisão Técnica da Unidade.",
  "11. Os arquivos criados devem ser copiados para seu Google Drive (no caso de alunos que possuem a conta SENAI aluno) e/ou enviados para o seu e-mail pessoal.",
  "12. Observando-se que os arquivos deixados no computador podem ser alterados e apagados por qualquer usuário. Portanto, evite deixar arquivos importantes.",
  "13. Não é permitido utilizar pendrive e outros dispositivos similares.",
  "14. Proibido desenvolver e/ou disseminar vírus nos equipamentos dos Laboratórios de Informática.",
  "15. É proibida a alteração de qualquer componente instalado nos equipamentos (hardware ou software).",
  "16. Desmontar qualquer equipamento ou acessório dos Laboratórios de Informática, sob qualquer pretexto, assim como remover equipamentos do local a eles destinados (mesmo dentro do recinto), desde que não esteja previsto em atividades didático-pedagógicas."
];

function frente() {
    let print = document.getElementById("regras");
    if (i < leis.length - 1) {
        i++;
    }
    print.innerHTML = leis[i];
}

function atras() {
    let print = document.getElementById("regras");
    if (i > 0) {
        i--;
    }
    print.innerHTML = leis[i];
}
