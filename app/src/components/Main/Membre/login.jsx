"use client"
import { useState } from 'react'
import AdminPanel from './AdminPanel'

export default function Login() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess] = useState(false)
const [message, setMessage] = useState('')  
  // Charger les variables d'environnement
  const adminLogin = process.env.NEXT_PUBLIC_ADMINLOGIN
  const adminPassword = process.env.NEXT_PUBLIC_ADMINPASSWORD

  const handleSubmit = (e) => {
    e.preventDefault()

    // Comparer avec les variables d'environnement chargées
    if (login !== adminLogin || password !== adminPassword) {
      setMessage('Mauvais couple identifiant/mot de passe')
      setSuccess(false) // S'assure que AdminPanel ne s'affiche pas
      console.log(login, adminLogin, password, adminPassword)
    } else {
      setSuccess(true)
      setMessage('') // Effacer le message d'erreur si connexion réussie
    }

  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeLogin = (e) => {
    setLogin(e.target.value)
  }

  return (
    <>
      {success ? (
        <AdminPanel />
      ) : (
        <div className='sm:w-2/4'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-2'>
            <label htmlFor="login">Identifiant :</label>
            <input 
              type="text" 
              id='login' 
              value={login} 
              onChange={handleChangeLogin}
              className='p-2 bg-slate-100 border border-solid'
            />

          

            <label htmlFor="password">Mot de passe :</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={handleChangePassword}
              className='p-2 bg-slate-100 border border-solid'
            />
              {message && <p className='text-red-500'>{message}</p>}
            <button type="submit" className='px-4 py-2 bg-blue-500 text-white w-2/4 rounded-lg'>
              Valider
            </button>
          </form>
        </div>
      )}
    </>
  )
}
