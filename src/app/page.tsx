import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
    return (
        <section className="mx-auto container px-4">
            <main>
                <h1 className="text-xl font-medium text-center mt-6 mb-8">
                    Our Tools
                </h1>
                <div>
                    <Card className="max-w-md">
                        <CardHeader>
                            <CardTitle>Font File Downloader</CardTitle>
                            <CardDescription>
                                Download font files from with modified CSS file.
                                Helpful for self-hosting fonts.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Link href="tools/font-file-downloader">
                                <Button>Open</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </section>
    );
}
