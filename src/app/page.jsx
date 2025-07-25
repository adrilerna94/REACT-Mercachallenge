import Link from "next/link";
import { Card, CardBody, Typography } from "@/styles/ui";

export default function Home() {

  return (
    <main className="flex items-center min-h-screen justify-center bg-gray-900 text-white">
      <Card className="w-full max-w-lg shadow-xl border border-gray-700 bg-gray-800">
        <CardBody className="text-center flex flex-col gap-4">
          <Typography variant="h1" color="amber" className="font-bold">
            🚀 Bienvenidos a la Misión: Merca Challenge
          </Typography>
          <Link href= "/products"><Typography variant= "h3" color= "blue">Go to Products</Typography></Link>
        </CardBody>
      </Card>
    </main>
  );
}
