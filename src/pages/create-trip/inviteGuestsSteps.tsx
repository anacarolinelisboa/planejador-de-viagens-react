import { ArrowRight, UserRoundPlus } from "lucide-react"
import { Button } from "../../components/button"

interface InviteGuestsStepsProps{
    openGuestsModal: () => void
    openConfirmTripModal: () => void
    emailsToInvite: string[]
}

export function InviteGuestsSteps({openGuestsModal, openConfirmTripModal, emailsToInvite} : InviteGuestsStepsProps){
    return(
        <div className="mt-4 py-3 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape flex-wrap gap-3">
            <button type="button" onClick={openGuestsModal} className="flex items-center gap-2 w-full md:flex-1 text-left">
                <UserRoundPlus className={`${emailsToInvite.length ? "text-zinc-100" : "text-zinc-400" } size-5`} />
                {emailsToInvite.length ? (
                <span className="-lg w-full md:flex-1">
                    {emailsToInvite.length} {emailsToInvite.length == 1 ? "pessoa convidada" : "pessoas convidadas" } 
                </span>
                ):(
                <span className="text-zinc-400 text-lg w-full md:flex-1">Quem estará na viagem?</span>
                )}                 
            </button>
 
            <Button onClick={openConfirmTripModal}>
                Confirmar viagem
                <ArrowRight className="size-5" />
            </Button>
        </div>
    )
}