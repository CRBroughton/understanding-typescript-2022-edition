import express from 'express'
import type { NextFunction, Request, Response } from 'express'
import todoRoutes from './routes/todos'

interface ExpressError {
  err: Error
  req: Request
  res: Response
  next: NextFunction
}

const app = express()
app.use('/todos', todoRoutes)

app.use(({ ...args }: ExpressError) => {
  args.res.status(500).json({ message: args.err.message })
})

app.listen(3001)

// err: Error, req: Request, res: Response, next: NextFunction
