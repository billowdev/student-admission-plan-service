import {Request, Response} from "express"

export const handleGetAll = async (req: Request, res: Response) => {
    res.json({
        msg: "thanwat"
    })
} 
export default { 
    handleGetAll

}