import type { NextApiRequest, NextApiResponse } from 'next'

import { User } from '@lib/User/model/User'
import { UserService } from '@lib/User/services/UserService'

type Data = {
  user?: User | null
  users?: User[]
  error?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      get(req, res)
      break
    case 'PUT':
      put(req, res)
      break
    case 'DELETE':
      remove(req, res)
      break
    default:
      res.status(405).json({ error: 'Method not allowed' })
      break
  }
}

function put(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { user } = req.body || req.query || null

  if (!user) {
    return res.status(400).json({ error: 'User is required' })
  }

  UserService.get(user.username).then(user => {
    if (user) {
      return res.status(500).json({ error: 'User alredy registered' })
    }
  })

  UserService.create(user).then(user => {
    return res.status(200).json({ user })
  })
}

function remove(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { username } = req.body || req.query || ''

  if (username == '') {
    res.status(400).json({ error: 'Username is required' })
    return
  }

  UserService.remove(username).then(user => {
    res.status(200).json({ user })
  })
}

function get(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.body || req.query || ''

  if (user == '') {
    return res.status(400).json({ error: 'Username is required' })
  }

  UserService.get(user)
    .then(user => {
      return res.status(200).json({
        user: {
          id: user!.id,
          username: user!.username,
          createdAt: user!.createdAt,
        },
      })
    })
    .catch(error => {
      return res.status(404).json({ error: 'User not found' })
    })
}
