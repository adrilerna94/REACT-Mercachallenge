import { Typography } from "@/components/ui";

//export function WelcomeMessage({ ...name }){
export function WelcomeMessage({ names }){
    return(
        <div>
            <Typography variant='h2' color="blue" className="font-bold">
            <ul>
                { names.map((name, indice) => (
                    <li key={indice}>Bienvenido {name}</li>
                )) }
            </ul>
            </Typography>
        </div>
    );
}