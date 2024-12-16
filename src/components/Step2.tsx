import { useFormContext } from "@/context/FormContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft } from "lucide-react"

const formSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email Address is required")
    .max(50, "Email Address must be less than 50 characters"),
})
type FormData = z.infer<typeof formSchema>

const Step2: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
  const { state, updateAction } = useFormContext()

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    updateAction(data)

    navigate("/signup/step3")
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Step 2</h2>
        <label>
          Email Address
          <Input {...register("email")} defaultValue={state.email || ""} />
        </label>
        {formState.errors.email && (
          <p className="text-red-500">{formState.errors.email.message}</p>
        )}
        <div className="flex align-center gap-2">
          <Button
            type="button"
            className="text-white"
            onClick={() => navigate("/signup/step1")}
          >
            <ArrowLeft />
          </Button>
          <Button type="submit" className="bg-secondary text-white">
            Next
          </Button>
        </div>
      </form>
    </>
  )
}

export default Step2
