function definirMateria(materiaEscolhida) {
    sessionStorage.setItem('materia', materiaEscolhida);
    window.location.href = '/quiz/pages/pergunta.html'
}

function definirMateriaComTagLink(materiaEscolhida) {
    sessionStorage.setItem('materia', materiaEscolhida);
}