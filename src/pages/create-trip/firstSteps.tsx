import { MapPin, Calendar, ArrowRight, Settings2, X } from "lucide-react" 
import { Button } from "../../components/button"
import { useState } from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface FirstStepsProps {
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
    setDestination: (destination: string) => void
    setEventStartAndEndDates: (dates: DateRange | undefined) => void
    eventStartAndEndDates: DateRange | undefined
}
export function FirstSteps({openGuestsInput,closeGuestsInput,isGuestsInputOpen,setDestination,setEventStartAndEndDates,eventStartAndEndDates} : FirstStepsProps) {
    const [isDatePickerOpen, setIsDataPickerOpen] = useState(false)
    
    function openDataPicker(){
        return setIsDataPickerOpen(true)
    }
    function closeDataPicker(){
        return setIsDataPickerOpen(false)
    }
    const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to 
        ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.from, "d' de 'LLL"))
        : null

    return ( 
        <div className="bg-zinc-900 pb-4 md:pb-0 px-4 rounded-xl flex justify-center flex-wrap items-center shadow-shape">
            <div className="flex gap-2 items-center w-full md:flex-1 py-3 md:py-4">
                <MapPin className="size-5 text-zinc-400" />
                <input
                    type="text"
                    disabled={isGuestsInputOpen}
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" 
                    placeholder="Para onde você vai?"
                    onChange={event => setDestination(event.target.value)}
                />
            </div>
            <button onClick={openDataPicker} disabled={isGuestsInputOpen} className="flex gap-2 items-center w-full md:flex-1 py-3 md:py-4 md:max-w-60">
                <Calendar className="size-5 text-zinc-400" />
                <span className="flex-1 bg-transparent text-lg text-zinc-400 text-left">
                    {displayedDate || 'Quando?'}
                </span>
            </button>
            
            {isDatePickerOpen &&(
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="max-w-[94%] w-fit rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <h2 className="font-lg font-semibold">Selecione a data</h2>
                                <button>
                                <X className="size-5 text-zinc-400" onClick={closeDataPicker} />
                                </button>
                            </div> 
                        </div>
                        <DayPicker selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} mode="range" />
                                
                        <Button type="submit" size="full" onClick={closeDataPicker} >
                            Confirmar
                        </Button>
                    </div>
                </div>  
            )}

            {isGuestsInputOpen ? (
                <Button onClick={closeGuestsInput} variant="secondary">
                    Alterar local/data
                    <Settings2 className="size-5" />
                </Button>
            ) : (
                <Button onClick={openGuestsInput}>
                  Continuar
                  <ArrowRight className="size-5" />
                </Button>
            )}
        </div> 
    )
} 
