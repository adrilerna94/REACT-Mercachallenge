'use client';
import { Button, Card, CardBody, Typography } from "@/components/ui";
import { WelcomeMessage } from "./welcome/page";
import { FormPage } from "./contact/page";
import { useState } from "react";


export default function Home() {
  const listaNombres = ['Adqui','Pepi','Felipe'];
  const [contador, setContador] = useState(0);
  return (
    <main className="flex items-center min-h-screen justify-center bg-gray-900 text-white">
      <Card className="w-full max-w-lg shadow-xl border border-gray-700 bg-gray-800">
        <CardBody className="text-center flex flex-col gap-4">
          <Typography variant="h1" color="amber" className="font-bold">
            🚀 Bienvenidos a la Misión: Red Planet
          </Typography>
          <WelcomeMessage names={listaNombres}/>
        </CardBody>
      </Card>
      <Card className="w-full max-w-lg shadow-xl border border-gray-700 bg-gray-800">
        <CardBody className="text-center flex flex-col gap-4">
          <Typography variant="h3" color="amber" className="font-bold">
            Formulario
          </Typography>
          <FormPage/>
          <Button onClick={()=> setContador(contador +1) }>Suma 1</Button>
          <Typography>{contador}</Typography>
        </CardBody>
      </Card>
    </main>
  );
}
