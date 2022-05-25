import { useEffect } from "react"
import { objAmount } from "../Views/Home/model"

const useFilter = (repository:objAmount[], setRepository:Function, filter:string) => {
    useEffect(() => {
        if(filter){
            console.log(filter)
            setRepository(repository.filter((el) => el.categories.includes(filter)))
        } else {
            // setRepository(API)
        }
    }, [filter])
}

export default useFilter;