import type { NextPage } from 'next'
import Head from 'next/head'

import { AiOutlineUser } from 'react-icons/ai'
import { BsKey } from 'react-icons/bs'
import { RiSendPlane2Fill } from 'react-icons/ri'

import Card from '@components/shared/Card/Card'
import Input from '@components/shared/Input/Input'

import style from '@styles/Signin.module.scss'
import Button from '@components/shared/Button/Button'

const SigIn: NextPage = () => {
  function handleSubmit(e: any) {
    e.preventDefault()
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
          <Input name="username" type="text">
            <AiOutlineUser />
          </Input>
          <Input name="password" type="password">
            <BsKey />
          </Input>
          <Input name="confirm-password" type="password">
            <BsKey />
          </Input>
        </Card>
        <Button type="submit">
          Sign In <RiSendPlane2Fill />
        </Button>
      </form>
    </>
  )
}

export default SigIn
