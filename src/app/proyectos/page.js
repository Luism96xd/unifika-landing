import { API_URL } from "@/config"

const getProyectos = async () => {
    const res = await fetch(`${API_URL}/proyectos?populate=*`);
    if(!res.ok){
        throw new Error("Something went wrong")
    }
    const {data} = await res.json();
    return data;
}

export default async function Home() {
    const proyectos = await getProyectos();
    return (
      <div>
        <h1>Proyectos</h1>
        {proyectos.map((e)  => {
            return (
                <div key={e.id} className="flex flex-col">
                    <img src={e.image} alt={e.name} />
                    <p>{e.name}</p>
                </div>
            )
        })}
      </div>
    )
}