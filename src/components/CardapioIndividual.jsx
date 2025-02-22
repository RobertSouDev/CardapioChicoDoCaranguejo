const menuItems2 = [
        
        {
          "codigo": "531",
          "nome": "SALMÃO GRELHADO",
          "preco": 89.90,
          "quantidade": "200g",
          "descricao": "Salmão grelhado com camarões refogados, servido com arroz de brócolis."
        },
        {
            "codigo": "532",
            "nome": "FILÉ MIGNON GRELHADO",
            "preco": 79.90,
            "quantidade": "200g",
            "descricao": "Filé mignon grelhado, servido com arroz à provençal."
        },
        {
            "codigo": "533",
            "nome": "FILÉ DE PEIXE GRELHADO",
            "preco": 79.90,
            "quantidade": "200g",
            "descricao": "Filé de grelhado, servido com arroz branco e legumes."
          },
        {
          "codigo": "534",
          "nome": "FILÉ DE FRANGO GRELHADO",
          "preco": 59.90,
          "quantidade": "200g",
          "descricao": "Filé de frango grelhado, acompanhado de arroz branco e legumes."
        },
       
        {
          "codigo": "535",
          "nome": "CAMARÃO GRELHADO",
          "preco": 79.90,
          "quantidade": "200g",
          "descricao": "Camarões refogados sobre arroz cremoso com presunto, molho branco, gratinado com queijo, batata palha e pimentões coloridos."
        }
      ]
  
  export default function CardapioIndividual() {
    return (
      <div className="max-w-2xl p-6 space-y-2 ">
        {menuItems2.map((item) => (
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