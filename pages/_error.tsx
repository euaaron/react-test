import { ErrorProps } from 'next/error'
import style from '@styles/Error.module.scss'

function Error({ statusCode }: ErrorProps) {
  return (
    <>
      <h1 className={style.errorHeader}>
        <span>⚠️</span>
        <b>Error {statusCode}</b>
      </h1>
      {statusCode === 404 ? (
        <p>Page not found.</p>
      ) : (
        <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
      )}
    </>
  )
}

interface ErrorInitialProps {
  res: any
  err: any
}

Error.getInitialProps = ({ res, err }: ErrorInitialProps) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
