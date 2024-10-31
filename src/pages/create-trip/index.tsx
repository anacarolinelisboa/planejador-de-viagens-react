import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { InviteGuestsModal } from "./inviteGuestsModal"
import { ConfirmTripModal } from "./confirmTripModal"
import { FirstSteps } from "./firstSteps"
import { InviteGuestsSteps } from "./inviteGuestsSteps"
import { DateRange } from "react-day-picker"
// import { api } from "../../lib/axios"

export function CreateTripPage() {
    const navigate = useNavigate()
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false) 

    const [destination, setDestination] = useState<string | false>(false);
    const [ownerEmail, setOwnerEmail] = useState<string | false>(false);
    const [ownerName, setOwnerName] = useState<string | false>(false);
    const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>(undefined)

    const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]) // define o tipo como array de strings

    function openGuestsInput(){
        setIsGuestsInputOpen(true);
    }
    function closeGuestsInput(){
        setIsGuestsInputOpen(false);
    }
    function openGuestsModal() {
        setIsGuestsModalOpen(true);
    } 
    function closeGuestsModal() {
        setIsGuestsModalOpen(false)
    }
    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true)
    }
    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false)
    }
    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) { // define o formato <HTMLFormElement> para que interprete certo
        event.preventDefault()
        
        const data = new FormData(event.currentTarget)
        const email = data.get('email')

        // Verifica se email é uma string
        if (typeof email !== 'string' || !email) {
            return;
        }
        
        if(!email){
        return
        }

        if(emailsToInvite.includes(email)){
        return
        }

        setEmailsToInvite([
        ...emailsToInvite, //como ele cria um novo array, essa é a forma usada para pegar o estado atuao e inserir no novo
        email
        ])

        event.currentTarget.reset()
    }
    function removeEmailFromInvites(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
        setEmailsToInvite(newEmailList)
    }
    async function createTrip(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        if(!destination){
            console.log('!destination')
            return
        }
        if(!eventStartAndEndDates?.from || !eventStartAndEndDates?.to){
            console.log('!eventStartAndEndDates')
            return
        } 
        if(!ownerName || !ownerEmail){
            console.log('!ownerName')
            return
        }
        if(!eventStartAndEndDates){
            console.log('!destination')
            return
        }

        // const response = await api.post('/trips', {
        //     destination,
        //     starts_at: eventStartAndEndDates?.from,
        //     ends_at: eventStartAndEndDates?.to,
        //     emails_to_invite: emailsToInvite,
        //     owner_email: ownerEmail,
        //     owner_name: ownerName,
        // })
        // const {tripId} = response.data
        navigate(`/trip`)
    }
    return (
        <div className="items-center flex justify-center h-screen bg-pattern bg-no-repeat bg-center">
        <div className="text-center w-full max-w-3xl p-6 md:p-0">
            <img src="/logo.svg" alt="" className="mx-auto mb-2"/>
            <h1 className="text-lg text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</h1>

            <div className="my-10">
                <FirstSteps
                    isGuestsInputOpen={isGuestsInputOpen}
                    closeGuestsInput={closeGuestsInput}
                    openGuestsInput={openGuestsInput}
                    setDestination={setDestination}
                    setEventStartAndEndDates={setEventStartAndEndDates}
                    eventStartAndEndDates={eventStartAndEndDates}
                />      
                <div>
                {isGuestsInputOpen && (
                    <InviteGuestsSteps
                        openGuestsModal={openGuestsModal}
                        openConfirmTripModal={openConfirmTripModal}
                        emailsToInvite={emailsToInvite}
                    />
                )}
                </div> 
            </div>

            <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda<br className="hidden md:block" /> com nossos <a href="" className="underline text-zinc-300">termos de uso</a> e <a href="" className="underline text-zinc-300">políticas de privacidade</a>.</p> 
        </div> 
        
        {isGuestsModalOpen && (
            <InviteGuestsModal 
                addNewEmailToInvite={addNewEmailToInvite}
                emailsToInvite={emailsToInvite}
                closeGuestsModal={closeGuestsModal}
                removeEmailFromInvites={removeEmailFromInvites}
            />
        )}
        {isConfirmTripModalOpen && (
            <ConfirmTripModal
                closeConfirmTripModal={closeConfirmTripModal}
                createTrip={createTrip}
                setOwnerName={setOwnerName}
                setOwnerEmail={setOwnerEmail}
            />
        )}
        </div>
    )
} 
