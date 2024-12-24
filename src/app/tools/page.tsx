import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ourTools } from '@/configs/menu';
import { Link } from 'lucide-react';

const ToolsPage = () => {
  return (
    <section className="mx-auto container px-4">
      <h1 className="text-xl font-medium text-center mt-6 mb-8">Our Tools</h1>
      <div>
        {ourTools.map((tool) => (
          <Card className="max-w-md" key={tool.title}>
            <CardHeader>
              <CardTitle>{tool.title}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <Link href={tool.href}>
                <Button>Open</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ToolsPage;