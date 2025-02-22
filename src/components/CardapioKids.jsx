
const menuItems3 = [
    {
      "codigo": "545",
      "nome": "FILÉ MIGNON DO KAKA",
      "preco": 49.90,
      "quantidade": "120g",
      "descricao": "Filé mignon grelhado em cubos, servido com arroz, feijão e batata frita ou legumes."
    },
    {
        "codigo": "546",
        "nome": "FILÉ À PARGEGIANA DO CHIQUINHO",
        "preco": 54.90,
        "quantidade": "120g",
        "descricao": "Filé de mignon à milansa. Servido com purê e spaghetti."
      },
    {
      "codigo": "547",
      "nome": "FILÉ DE FRANGO DA JOJÔ",
      "preco": 34.90,
      "quantidade": "120g",
      "descricao": "Filé de frango grelhado, servido com arroz, feijão, batata frita ou legumes."
    },
    {
      "codigo": "548",
      "nome": "SPAGHETTI À BOLONHESA DO CHIQUINHO",
      "preco": 39.90,
      "quantidade": "",
      "descricao": "Spaghetti italiano com molho a bolonhesa e parmesão."
    }
  ]
  

export default function CardapioKids() {
return (
  <div className="max-w-2xl p-6 space-y-2 ">
    {menuItems3.map((item) => (
      <div key={item.codigo} className=" pb-4">
        <div className="flex justify-between items-start ">
          <div className="flex-1  ">
            <p className="text-sm text-blue-900 mb-1">{item.codigo}</p>
            <h2 className="text-xl font-bold text-orange-600">{item.nome}</h2>
            <p className="text-sm  text-blue-900 mt-1 font-bold">{item.quantidade} {item.descricao}</p>
          </div>
          <div className="flex m-5">
            <span className="text-2xl font-bold  text-blue-900">R$ {item.preco} </span>
          </div>
            
        </div>
        <div className="border-t-2 border-dotted border-blue-900"></div>
      </div>
    ))}
  </div>
);
}