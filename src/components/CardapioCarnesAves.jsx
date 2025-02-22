const menuItems1 = [
  {
    "codigo": 104,
    "nome": "FILÉ COM BACON AO MOLHO MADEIRA",
    "preco": 139.90,
    "quantidade": "350g",
    "descricao": "Filé mignon com bacon ao molho madeira, arroz a grega e purê."
  },
  {
    "codigo": 105,
    "nome": "FILÉ MIGNON GRELHADO",
    "preco": 129.90,
    "quantidade": "350g",
    "descricao": "Filé mignon grelhado, batata frita e arroz branco."
  },
  {
    "codigo": 106,
    "nome": "FILÉ À PARMEGIANA",
    "preco": 149.90,
    "quantidade": "350g",
    "descricao": "Filé mignon a milanesa, emcoberto com spaghetti, molho de tomatee gratinado com queijo muçarela. Servidor com arroz branco e purê de batatas."
  },
  {
    "codigo": 107,
    "nome": "CARNE DE SOL DA TERRA",
    "preco": 149.90,
    "quantidade": "350g",
    "descricao": "Carne de sol na manteiga da terra, macaxeira cozida, paçoca, servidos com risoto de castanha e pirão de queijo."
  },
   // so vi ate aqui
  {
    "codigo": 108,
    "nome": "FILÉ MIGNON AO MOLHO DE QUEIJOS",
    "preco": 144.90,
    "quantidade": "350g",
    "descricao": "Medalhões de filé mignon grelhados, flambados conhaque e cobertos com molho cremoso de quatro queijos. Acompanha arroz e batata gratinada."
  },
  {
    "codigo": 109,
    "nome": "PICANHA IMPORTADA",
    "preco": 159.90,
    "quantidade": "350g",
    "descricao": "Picanha argentina, acompanhada de farofa de bacon, batata frita e vinagrete."
  },
  {
    "codigo": 110,
    "nome": "CARNE DE SOL SERTANEJA",
    "preco": 149.90,
    "quantidade": "350g",
    "descricao": "Carne de sol desfiada, servida com paçoca de carne seca, banana da terra empanada e queijo coalho grelhado."
  },
  {
    "codigo": 111,
    "nome": "ESCONDIDINHO DE CARNE DE SOL",
    "preco": 134.90,
    "quantidade": "350g",
    "descricao": "Camadas de purê de mandioca, carne de sol desfiada e queijo gratinado. Acompanha arroz branco."
  },
  {
    "codigo": 112,
    "nome": "MAMINHA IMPORTADA",
    "preco": 119.90,
    "quantidade": "350g",
    "descricao": "Maminha argentina grelhada, servida com farofa de banana e batata sauté."
  },
  {
    "codigo": 113,
    "nome": "FRANGO À PARMEGIANA",
    "preco": 119.90,
    "quantidade": "350g",
    "descricao": "Filé de frango empanado, coberto com molho de tomate e queijo derretido. Acompanha arroz e batata palha."
  },
  {
    "codigo": 114,
    "nome": "FRANGO À CUBANA",
    "preco": 109.90,
    "quantidade": "350g",
    "descricao": "Filé de frango empanado, servido com banana da terra empanada e arroz branco."
  },
  {
    "codigo": 115,
    "nome": "FRANGO GRELHADO",
    "preco": 89.90,
    "quantidade": "350g",
    "descricao": "Filé de frango grelhado, acompanhado de arroz branco e legumes refogados."
  },
  {
    "codigo": 116,
    "nome": "FRANGO À BRASA DO FUTURO",
    "preco": 124.90,
    "quantidade": "300g",
    "descricao": "Frango grelhado com molho branco de cogumelos, servido com arroz de ervas finas e batata rústica."
  },
  {
    "codigo": 117,
    "nome": "PICANHA DO SOL",
    "preco": 159.90,
    "quantidade": "350g",
    "descricao": "Picanha curada como carne de sol, acompanhada de queijo coalho, paçoca de carne seca e macaxeira frita."
  }
];
  
  export default function CardapioCarnesAves() {
    return (
      <div className="max-w-2xl p-6 space-y-2 ">
        {menuItems1.map((item) => (
          <div key={item.codigo} className=" pb-4">
            <div className="flex justify-between items-start ">
              <div className="flex-1  ">
                <p className="text-sm text-blue-900 mb-1">{item.codigo}</p>
                <h2 className="text-xl font-bold text-orange-600">{item.nome}</h2>
                <p className="text-sm  text-blue-900 mt-1 font-bold">{item.quantidade} {item.descricao}</p>
              </div>
              <div className="flex m-5">
                <span className="text-2xl font-bold  text-blue-900">R$ {item.preco}</span>
              </div>
                
            </div>
            <div className="border-t-2 border-dotted border-blue-900"></div>
          </div>
        ))}
      </div>
    );
  }