import { createContext, useState, useContext, ReactNode, FC } from "react"

type FormState = {
  companyName: string
  email: string
  password: string
  name: string
  phone: string
}

type FormContextType = {
  state: FormState
  updateAction: (data: Partial<FormState>) => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

type FormProviderProps = {
  children: ReactNode
}

export const FormProvider: FC<FormProviderProps> = ({ children }) => {
  const [state, setState] = useState<FormState>({
    companyName: "",
    email: "",
    password: "",
    name: "",
    phone: "",
  })

  const updateAction = (data: Partial<FormState>) => {
    setState((prev) => ({ ...prev, ...data }))
  }

  return (
    <FormContext.Provider value={{ state, updateAction }}>
      {children}
    </FormContext.Provider>
  )
}

// Custom Hook for Context
export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error("FormContext must be used within a FormProvider")
  }
  return context
}

export default FormContext
