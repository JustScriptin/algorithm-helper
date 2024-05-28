import { ModeToggle } from "@/components/theme/ThemeToggle";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export default function Home(){
  return (
    <main>
      <ModeToggle />
      <Heading as="h2">Hello, world!</Heading>
      <Paragraph>Test P</Paragraph>
    </main>
  );
}
