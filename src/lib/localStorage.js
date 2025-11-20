export const loadLocalStorage = key => {
  try {
    const serializedState = localStorage.getItem(key)

    return serializedState ? JSON.parse(serializedState) : undefined
  } catch (error) {
    console.error(`Error loading state for key "${key}":`, error)
    return
  }
}

export const saveLocalStorage = (key, state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (error) {
    console.error(`Error saving state for key "${key}":`, error)
  }
}

export const clearLocalState = key => {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error clearing state for key "${key}":`, error)
  }
}
