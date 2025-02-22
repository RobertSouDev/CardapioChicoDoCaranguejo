// components/CardapioEntradas.jsx
const menuItems = [
    { codigo: "001", nome: "Caranguejo à Moda do Chico", preco: 43.90, quantidade: "3 Unidades" },
    { codigo: "002", nome: "Casquinha de Caranguejo", preco: 38.90, quantidade: "100g" },
    { codigo: "003", nome: "Patinha de Caranguejo ao Vinagrete", preco: 58.90, quantidade: "12 Unidades" },
    { codigo: "004", nome: "Patinha de Caranguejo à Milanesa", preco: 58.90, quantidade: "12 Unidades" },
    { codigo: "005", nome: "Atolado de Caranguejo", preco: 79.90, quantidade: "" },
    { codigo: "006", nome: "Camarão ao Alho e Óleo", preco: 58.90, quantidade: "300g" },
    { codigo: "007", nome: "Camarão à Milanesa", preco: 79.90, quantidade: "12 Unidades" },
    { codigo: "008", nome: "Arroz de Camarão", preco: 79.90, quantidade: "" },
    { codigo: "009", nome: "Camarão ao Alho e Óleo sem Casca", preco: 86.90, quantidade: "300g" },
    { codigo: "010", nome: "Camarão Crocante", preco: 69.90, quantidade: "6 Unidades com cream cheese" },
    { codigo: "011", nome: "Pastel de Camarão com Catupiry", preco: 34.90, quantidade: "6 Unidades" },
    { codigo: "012", nome: "Pastel de Carne Moída com Azeitonas", preco: 26.90, quantidade: "6 Unidades" },
    { codigo: "013", nome: "Pastel de Queijo", preco: 26.90, quantidade: "6 Unidades" },
    { codigo: "014", nome: "Pastel de Carne de Sol", preco: 26.90, quantidade: "6 Unidades" },
    { codigo: "015", nome: "Macaxeira Frita", preco: 29.90, quantidade: "250g" },
    { codigo: "016", nome: "Queijo Coalho Grelhado com Mel", preco: 28.90, quantidade: "250g" },
    { codigo: "017", nome: "Batata Frita", preco: 29.90, quantidade: "250g" },
    { codigo: "018", nome: "Croquete de Bacalhau", preco: 59.90, quantidade: "12 Unidades" },
    { codigo: "019", nome: "Isca de Peixe Crocante", preco: 58.90, quantidade: "300g" },
    { codigo: "020", nome: "Dadinho de Tapioca", preco: 41.90, quantidade: "250g" },
    { codigo: "021", nome: "Picanha em Tiras com Fritas", preco: 89.90, quantidade: "" },
    { codigo: "022", nome: "Filé Trinchado ao Molho Madeira com Fritas", preco: 79.90, quantidade: "250g" },
    { codigo: "023", nome: "Frango à Passarinho com Fritas", preco: 49.90, quantidade: "300g" },
    { codigo: "024", nome: "Cavala Frita com Macaxeira", preco: 76.90, quantidade: "300g" },
    { codigo: "025", nome: "Polvo ao Vinagrete com Torradas", preco: 71.90, quantidade: "" },
    { codigo: "026", nome: "Ostras Naturais", preco: 54.90, quantidade: "12 Unidades" },
    { codigo: "027", nome: "Lula à Dorê", preco: 69.90, quantidade: "" },
    { codigo: "028", nome: "Moqueca de Arraia", preco: 59.90, quantidade: "300g" },
    { codigo: "029", nome: "Maminha em Tiras com Fritas", preco: 69.90, quantidade: "" },
    { codigo: "030", nome: "Filé Trinchado ao Molho de Queijos com Torradas", preco: 89.90, quantidade: "250g" },
    { codigo: "031", nome: "Carne de Sol com Macaxeira", preco: 76.90, quantidade: "250g" },
    { codigo: "032", nome: "Feijão Verde com Carne de Sol", preco: 48.90, quantidade: "300g" },
    { codigo: "033", nome: "Piabinha Frita", preco: 39.90, quantidade: "300g" },
    { codigo: "034", nome: "Ostras Gratinadas", preco: 69.90, quantidade: "12 Unidades" },
    { codigo: "035", nome: "Sururu ao Coco", preco: 59.90, quantidade: "" },
    { codigo: "036", nome: "Polvo à Passarinho", preco: 74.90, quantidade: "250g" },
    { codigo: "037", nome: "Coxinha de Caranguejo", preco: 32.90, quantidade: "1 Unidade" },
    { codigo: "038", nome: "Bolinha de Caranguejo", preco: 48.90, quantidade: "12 Unidades" },
    { codigo: "039", nome: "Bolinha de Carne de Sol", preco: 38.90, quantidade: "12 Unidades" },
    { codigo: "040", nome: "Meia Ostra", preco: 27.90, quantidade: "" },
    { codigo: "041", nome: "Torresmo", preco: 26.90, quantidade: "" },
    { codigo: "042", nome: "Bolinha de Queijo", preco: 38.90, quantidade: "12 Unidades" },
    { codigo: "043", nome: "Bolinha de Peixe", preco: 38.90, quantidade: "12 Unidades" },
    { codigo: "046", nome: "Caldo de Caranguejo", preco: 19.90, quantidade: "" },
    { codigo: "047", nome: "Caldo de Sururu", preco: 19.90, quantidade: "" },
    { codigo: "048", nome: "Caldo de Peixe", preco: 19.90, quantidade: "" }
  ];
  
  export default function CardapioEntradas() {
    return (
      <div className="max-w-2xl p-6 space-y-2 ">
        {menuItems.map((item) => (
          <div key={item.codigo} className=" pb-4">
            <div className="flex justify-between items-start ">
              <div className="flex-1  ">
                <p className="text-sm text-blue-900 mb-1">{item.codigo}</p>
                <h2 className="text-xl font-bold text-orange-600">{item.nome}</h2>
                <p className="text-sm  text-blue-900 mt-1 font-bold">{item.quantidade}</p>
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