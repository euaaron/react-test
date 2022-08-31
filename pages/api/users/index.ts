import { User } from '@lib/User/model/User'
import { UserService } from '@lib/User/services/UserService'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  users: User[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  UserService.listAll().then(users => {
    res.status(200).json({ users })
  })
}
