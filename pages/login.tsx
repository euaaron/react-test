import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsKey } from 'react-icons/bs'

import Card from '@components/shared/Card/Card'
import Input from '@components/shared/Input/Input'
import Button from '@components/shared/Button/Button'

import style from '@styles/Login.module.scss'

interface Session {
  id: string
  username: string
  createdAt: string
  token: string
}

const LogIn: NextPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [session, setSession] = useState<Session>()
  const route = useRouter()

  useEffect(() => {
    if (session && session.token) {
      route.push('/')
    }
  }, [session, route])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    axios
      .put('/api/auth', {
        user: {
          username,
          password,
        },
      })
      .then(({ data }) => {
        setSession(data.session)
        route.push('/')
      })
      .catch(err => {
        alert(err)
      })
  }

  return (
    <>
      <Head>
        <title>React Test | Log In</title>
        <meta name="description" content="React Test Login page." />
      </Head>

      <h1>Login</h1>

      <form onSubmit={handleSubmit} className={style.loginForm}>
        <Card>
          <Input required name="username" type="text" value={username} callback={e => setUsername(e.target.value)}>
            <AiOutlineUser />
          </Input>
          <Input required name="password" type="password" value={password} callback={e => setPassword(e.target.value)}>
            <BsKey />
          </Input>
        </Card>
        <Button type="submit">
          Access <AiOutlineArrowRight />
        </Button>
      </form>
    </>
  )
}

export default LogIn
