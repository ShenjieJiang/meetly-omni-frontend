import { useFormContext } from "@/context/FormContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft } from "lucide-react"

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Company Name is required")
    .max(50, "Company Name must be less than 50 characters"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .max(15, "Phone number must be less than 15 characters"),
})

type FormData = z.infer<typeof formSchema>

const Step4: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  })
  const { state, updateAction } = useFormContext()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormData> = (data) => {
    updateAction(data)

    navigate("/signup/success")

    //TODO: here will use api signup(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Step 4</h2>
        <div>Please Enter Your Contact Information</div>
        <label>
          Contact Name:
          <Input {...register("name")} defaultValue={state.name || ""} />
        </label>
        {formState.errors.name && (
          <p className="text-red-500">{formState.errors.name.message}</p>
        )}
        <label>
          Contact phone number:
          <Input {...register("phone")} defaultValue={state.phone || ""} />
        </label>
        {formState.errors.phone && (
          <p className="text-red-500">{formState.errors.phone.message}</p>
        )}
        <div className="flex align-center gap-2">
          <Button
            type="button"
            className="text-white"
            onClick={() => navigate("/signup/step3")}
          >
            <ArrowLeft />
          </Button>

          <Button type="submit" className="bg-secondary text-white">
            Next/Finish
          </Button>
        </div>
      </form>
    </>
  )
}

export default Step4
