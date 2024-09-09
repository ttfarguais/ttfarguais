"use client";
import playerType from "../../../data/playerType";
export default function Contact({
  handleChange,
  handleSubmit,
  formData = {},
  validateEmail,
  validatePhone,
  responseMessage,
  isSubmitted,
  isValidStatus
}) {


  return (
    <div className="flex flex-col items-center m-auto py-6">
      <h1 className="text-xl text-center font-bold p-4 mb-8">
        Contactez-nous !
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full md:w-4/6 gap-10 py-10 xl:w-3/6 p-6 mb-10"
      >
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-col flex w-full gap-2">
            <label className="text-md md:text-lg" htmlFor="lastName">
              Nom :
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
              required
              placeholder="Ping"
            />
          </div>

          <div className="flex-col flex w-full gap-2">
            <label className="text-md md:text-lg" htmlFor="firstName">
              Prénom :
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
              required
              placeholder="Pong"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-col flex gap-2 w-full">
            <label className="text-md md:text-lg" htmlFor="email">
              Email :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
              required
              placeholder="ping.pong@gmail.com"
            />
            {isSubmitted && !validateEmail() && (
              <p className="text-red-600 text-sm">
                Veuillez entrer une adresse email valide (ex: mon.adresse@gmail.com) *
              </p>
            )}
          </div>

          <div className="flex-col flex gap-2">
            <label className="text-md md:text-lg" htmlFor="tel">
              Tél. :
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              value={formData.tel}
              onChange={handleChange}
              required
              className="border-2 px-4 py-2 bg-contrast-2"
            />
            {isSubmitted && !validatePhone() && formData.tel && (
              <p className="text-red-600 text-sm">
                Veuillez entrer un numéro de téléphone valide (ex: 06 69 45 ** **)
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-col flex gap-2 w-full">
            <label className="text-md md:text-lg" htmlFor="municipality">
              Commune de résidence :
            </label>
            <input
              type="text"
              name="municipality"
              id="municipality"
              value={formData.municipality}
              required
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="flex-col flex gap-2 w-full">
            <label className="text-md md:text-lg" htmlFor="birthdate">
              Date de naissance :
            </label>
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              value={formData.birthdate}
              required
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
            />
          </div>

          <div className="flex-col flex gap-2 w-full">
            <label className="text-md md:text-lg" htmlFor="typePlayer">
              Type de joueur :
            </label>
            <select
              name="typePlayer"
              id="typePlayer"
              value={formData.typePlayer}
              required
              onChange={handleChange}
              className="border-2 px-4 py-2 bg-contrast-2"
            >
              <option value=""></option>
              {playerType.map((type, index) => (
                <option key={index} value={type.title}>
                  {type.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex-col flex gap-2">
          <label className="text-md md:text-lg" htmlFor="description">
            Comment avez-vous connu le club ? :
          </label>
          <textarea
            name="description"
            id="description"
            required
            value={formData.description}
            onChange={handleChange}
            className="border-2 px-4 py-2 bg-contrast-2 h-40"
            placeholder="J'ai connu le club grâce à..."
          ></textarea>
        </div>

        <div className="flex-col flex gap-2">
          <label className="text-md md:text-lg" htmlFor="message">
            Votre demande :
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="border-2 px-4 py-2 bg-contrast-2 h-40"
            required
            placeholder="Je voudrais savoir si..."
          ></textarea>
        </div>

        {responseMessage && (
          <p
            className={`py-2 px-4 ${
              isValidStatus ? "bg-solid" : "bg-red-600"
            } text-center text-contrast-1 rounded-xl`}
          >
            {responseMessage}
          </p>
        )}

        <p className="md:text-lg">
          <span className="text-red-600">*</span> Tous les champs sont obligatoires.
        </p>

        <button
          type="submit"
          className="text-contrast-3 py-1 px-4 rounded-xl border border-contrast-3 text-sm hover:bg-solid border-solid hover:text-contrast-1 transition-all w-2/4 m-auto"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
