import { useRef } from "react"
import { debounce } from "../lib/debounce"

const EmailSection = ({ userEmail, setUserEmail, onNext }) => {
  const inputRef = useRef(null)

  const handleChange = debounce(event => {
    setUserEmail(event.target.value)
  }, 300)

  const handleSubmit = event => {
    event.preventDefault()

    const email = inputRef.current.value.trim()

    if (email) {
      setUserEmail(email)
      onNext()
    }
  }

  return (
    <div className="screen full-width">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          ref={inputRef}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="off"
          defaultValue={userEmail}
          onChange={handleChange}
          required
        />
        <div className="button-container">
          <button disabled={!userEmail}>Next</button>
        </div>
      </form>
    </div>
  )
}

export default EmailSection
