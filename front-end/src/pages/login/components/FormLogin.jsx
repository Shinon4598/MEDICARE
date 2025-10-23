import { Link } from 'wouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/shared/Components/Button'
import { formLoginSchema } from '../schema'
import Input from '@/shared/Components/Input'

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formLoginSchema) })
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form className="flex flex-col gap-3" action="submit" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-4xl text-gray-600 font-bold text-center">Inicia sesión</h2>
      <Input
        label="Email"
        name="email"
        icono={faUser}
        register={register}
        error={errors?.email?.message}
      />
      <Input
        label="contraseña"
        name="contraseña"
        tipo="contraseña"
        icono={faLock}
        register={register}
        error={errors?.contraseña?.message}
      />

      <div>
        <input type="checkbox" name="recordarContraseña" id="recordarContraseña" />
        <label htmlFor="recorderContraseña"> Recordar contraseña</label>
      </div>

      <Link>Olvidaste tu contraseña ? </Link>

      <Button texto="Inicia sesión" />
      <p>O inicia sesión con otra plataforma</p>
      <div className="flex items-center justify-center">
        <FontAwesomeIcon
          icon={faGoogle}
          size="2x"
          className="text-red-500 cursor-pointer hover:opacity-80"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          size="2x"
          className="text-blue-600 cursor-pointer hover:opacity-80"
        />
      </div>
    </form>
  )
}
