import { X, User, Mail } from "lucide-react"  
import { Button } from "../../components/button"
import { FormEvent } from "react"

interface ConfirmTripModalProps{
    closeConfirmTripModal: () => void
    createTrip: (event: FormEvent<HTMLFormElement>) => void
    setOwnerEmail: (email: string) => void
    setOwnerName: (name: string) => void
}

export function ConfirmTripModal({closeConfirmTripModal, createTrip,setOwnerEmail,setOwnerName}: ConfirmTripModalProps) { 
    return ( 
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="max-w-[94%] w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <h2 className="font-lg font-semibold">Confirmar criação da viagem</h2>
                    <button>
                    <X className="size-5 text-zinc-400" onClick={closeConfirmTripModal} />
                    </button>
                </div>

                <p className="text-sm text-zinc-400">Para concluir a criação da viagem para <b className="text-zinc-100">Florianópolis, Brasil</b> nas datas de <b className="text-zinc-100">16 a 27 de Agosto de 2024</b> preencha seus dados abaixo:</p>
                </div>
                
                <div className="w-full h-px bg-zinc-800" />

                <form onSubmit={createTrip} className="flex flex-wrap gap-2">
                <div className="py-3 px-4 flex items-center w-full gap-2 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
                    <User className="text-zinc-400 size-5" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu nome completo"
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                        onChange={event => setOwnerName(event.target.value)}
                    />
                </div>
                <div className="py-3 px-4 flex items-center w-full gap-2 p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
                    <Mail className="text-zinc-400 size-5" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail pessoal"
                        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                        onChange={event => setOwnerEmail(event.target.value)}
                    />
                </div>

                <Button type="submit" size="full">
                    Confirmar criação da viagem
                </Button>
                </form>
            </div>
        </div>  
    )
} 
