import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { BsKey } from 'react-icons/bs'
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'

import { User } from '@lib/User/model/User'
import Card from '@components/shared/Card/Card'
import Input from '@components/shared/Input/Input'
import Button from '@components/shared/Button/Button'

import style from '@styles/Signin.module.scss'

const SigIn: NextPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [search, setSearch] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    getAllUsers()
  }, [])

  function getAllUsers() {
    axios.get('/api/users/').then(({ data }) => {
      setUsers(data.users)
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (isValid) {
      axios
        .put(`/api/users/${username}`, {
          user: {
            username,
            password,
          },
        })
        .then(() => {
          getAllUsers()
        })
    }
  }

  function checkValidation(callback: () => void) {
    callback()
    let valid = true

    if (!username || !password || !confirmPassword) {
      valid = false
    }

    if (username.length < 2) {
      valid = false
    }

    if (password.length < 5) {
      valid = false
    }

    if (password !== confirmPassword) {
      valid = false
    }

    setIsValid(valid)
  }

  return (
    <>
      <Head>
        <title>React Test | Sign In</title>
        <meta name="description" content="React Test SigIn page." />
      </Head>

      <h1>Register</h1>

      <form onSubmit={handleSubmit} className={style.signForm}>
        <Card>
          <Input
            required
            name="username"
            type="text"
            value={username}
            minLenght={3}
            callback={e => checkValidation(() => setUsername(e.target.value))}
          >
            <AiOutlineUser />
          </Input>
          <Input
            required
            name="password"
            type="password"
            value={password}
            minLenght={6}
            callback={e => checkValidation(() => setPassword(e.target.value))}
          >
            <BsKey />
          </Input>
          <Input
            required
            name="confirm-password"
            type="password"
            value={confirmPassword}
            callback={e => checkValidation(() => setConfirmPassword(e.target.value))}
          >
            <BsKey />
          </Input>
        </Card>
        <Button type="submit" disabled={!isValid}>
          <AiFillPlusCircle /> Add User
        </Button>
      </form>

      {users.length > 0 && (
        <section>
          <Input name="search" type="text" value={search} callback={e => setSearch(e.target.value)}>
            <AiOutlineSearch />
          </Input>
          <ul>
            {users
              .filter(user => user.username.includes(search))
              .map(user => (
                <li key={`user-${user.username}`}>{user.username}</li>
              ))}
          </ul>
        </section>
      )}
    </>
  )
}

export default SigIn
