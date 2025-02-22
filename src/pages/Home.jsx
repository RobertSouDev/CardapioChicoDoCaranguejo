import bgImage from "../assets/IMG1.jpg"; // Verifique o caminho e extensão exatos

export default function Home() {
  return (
    <div 
      className="h-screen bg-cover bg-center 
"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      home
    </div>
  );
}