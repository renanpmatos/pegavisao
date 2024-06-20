import Card from "@/components/card";
export default function Home() {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

  return (
    <div className="h-screen flex justify-center items-center">
      <Card
        title="Teste"
        postDate="Há 2 horas"
        description={text}
        coments={123}
      />
    </div>
  );
}
