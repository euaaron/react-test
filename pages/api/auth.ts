import { UserService } from '@lib/User/services/UserService'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.body

  if (!user) {
    return res.status(400).json({ error: 'Cannot authenticate' })
  }

  UserService.get(user.username)
    .then(data => {
      if (data!.password == user.password) {
        return res.status(200).json({
          user: {
            id: data!.id,
            username: data!.username,
            token: jwt.sign({ id: data!.id }, data!.password, {
              expiresIn: '1h',
            }),
            createdAt: data!.createdAt,
          },
        })
      }
      return res.status(401).json({ error: 'Invalid password' })
    })
    .catch(error => {
      return res.status(404).json({ error: 'User not found' })
    })
}
