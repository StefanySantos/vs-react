import "./style.css"
import { useEffect, useState } from "react"
import CardServicos from "../../components/CardServicos"
import api from "../../utils/api";

export default function ListaServicos() {


  const [produtos, setProdutos] = useState<any[]>([]);

  const [skillDigitada, setSkillDigitada] = useState<string>("")

  const [listaProdutosFiltrados, setListaProdutosFiltrados] = useState<any[]>(produtos)

    useEffect(() => {
    document.title = "Lista de Servicos - VSConnect"

    listarServicos()
    }, [])

  function buscarPorSkill(event: any) {
    event.preventDefault()

    const produtosFiltrados = produtos.filter((produto: any) => produto.techs.includes(skillDigitada.toLocaleUpperCase()))

    if (produtosFiltrados.length === 0) {
      alert("Nenhum produto foi encontrado com essa skill")
    } else {
      setListaProdutosFiltrados(produtosFiltrados)
    }
  }

  function retornoProdutosGeral(event: any) {
    if (event.target.value === "") {
      listarServicos()
    }

    setSkillDigitada(event.target.value)
  }

  function listarServicos(){
    //pega os users da api, e então, quando terminar (then), mostre no console.log
    api.get("servicos").then((response: any) => {
      console.log(response.data)
      setProdutos(response.data)
    })
  }
  
  return (
    <>

      <main id="lista-servicos">
        <div className="container container_lista_servicos">
          <div className="lista_servicos_conteudo">
            <h1>Lista de Serviços</h1>
            <hr />
            <form method="post" onSubmit={buscarPorSkill}>
              <div className="wrapper_form">
                <label htmlFor="busca">Procurar serviços</label>
                <div className="campo-label">
                  <input
                    type="search"
                    name="campo-busca"
                    id="busca"
                    placeholder="Buscar serviços por tecnologias..." onChange={retornoProdutosGeral}
                  />
                  <button type="submit">Buscar</button>
                </div>
              </div>
            </form>
            <div className="wrapper_lista">
              <ul>
                {produtos.map((produto: any, index: number) => {
                  return <li key={index}>
                    <CardServicos
                      id ={produto.id}
                      titulo={produto.nome}
                      preco={produto.valor}
                      texto={produto.descricao}
                      techs={produto.techs}
                    />
                  </li>
                }
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>

  )
}
