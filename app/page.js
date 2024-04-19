import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="dangerOutline">Click me</Button>
    </div>
  );
}
