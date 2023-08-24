function Bio() {
  return (
    <p>
      Ola!, meu nome é Tarik, tenho 16 anos, gosto de musica, jogos e livros,
      atualmente estou no 2 ano do ensino médio integrado com o curso tecnico de
      Desenvolvimento de Sistemas.
    </p>
  );
}

function Nome() {
  return <h2>Tarik Pereira de Lima</h2>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Auto-Biografia!</h1>
      <Nome />
      <Bio />
    </div>
  );
}
