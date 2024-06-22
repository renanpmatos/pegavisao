import Card from "@/components/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
export default function Main() {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

  return (
    <div className="h-screen flex justify-center items-center">
      <ScrollArea className="h-screen">
        <Card
          title="Teste"
          postDate="Há 2 horas"
          description={text}
          coments={123}
        />
        <Separator className="my-6" />
        <Card
          title="Teste"
          postDate="Há 2 horas"
          description={text}
          coments={123}
        />
        <Separator className="my-6" />
        <Card
          title="Teste"
          postDate="Há 2 horas"
          description={text}
          coments={123}
        />
        <Separator className="my-6" />
        <Card
          title="Teste"
          postDate="Há 2 horas"
          description={text}
          coments={123}
        />
      </ScrollArea>
    </div>
  );
}
