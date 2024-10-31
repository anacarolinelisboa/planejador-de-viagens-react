import { CircleCheck } from "lucide-react";  

export function TripDetailsPage() { 
    return (
        <div className="max-w-lg px-8 mx-auto flex content-center text-center flex-wrap justify-center h-screen space-y-4">  
            <CircleCheck className="size-14 text-lime-300" />
            <h2 className="w-full text-xl font-semibold">Sua viagem foi confirmada com sucesso!</h2>
            <p>Prepare as malas! Seus convidados já receberam uma notificação com os dados da viagem.</p>  
        </div>
    )
}