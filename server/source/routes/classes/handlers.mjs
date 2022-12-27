export const get = (res, req) => {
    try {
        return res.status(200).json({ data: [] })
    } catch ({message}) {
        return res.status(400).json({message})
    }
}

export const post = (res, req) => {
    try {
        return res.sendStatus(201)
    } catch({message}) {
        return res.status(400).json({message})
    }
}